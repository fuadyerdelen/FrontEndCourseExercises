import helpers from '../../modules/helpers/helpers';

const player = () => {
	let computerAttackData = {
		firstPartHitCoor: null,
		ship: null,
		isHorizontal: true,
	};

	const _computerAttackCrossDirection = (enemyGameboard) => {
		const [row, col] = computerAttackData.firstPartHitCoor;

		if (computerAttackData.isHorizontal) {
			for (let currCol = col + 1; currCol < col + 4; currCol++) {
				if (enemyGameboard.containsInvalidCoordinates(row, currCol)) {
					break;
				}
				const currCell = enemyGameboard.getGameboard()[row][currCol];
				if (helpers.isPartHit(currCell)) {
					continue;
				} else if (!helpers.isValidCellToAttack(currCell)) {
					break;
				} else {
					const itHit = attack(enemyGameboard, row, currCol);
					if (itHit) {
						computerAttackData.isHorizontal = true;
					}
					return itHit;
				}
			}

			for (let currCol = col - 1; currCol > col - 4; currCol--) {
				if (enemyGameboard.containsInvalidCoordinates(row, currCol)) {
					break;
				}
				const currCell = enemyGameboard.getGameboard()[row][currCol];
				if (helpers.isPartHit(currCell)) {
					continue;
				} else if (!helpers.isValidCellToAttack(currCell)) {
					break;
				} else {
					const itHit = attack(enemyGameboard, row, currCol);
					if (itHit) {
						computerAttackData.isHorizontal = true;
					}
					return itHit;
				}
			}
			computerAttackData.isHorizontal = false;
		}

		if (!computerAttackData.isHorizontal) {
			for (let currRow = row + 1; currRow < row + 4; currRow++) {
				if (enemyGameboard.containsInvalidCoordinates(currRow, col)) {
					break;
				}
				const currCell = enemyGameboard.getGameboard()[currRow][col];
				if (helpers.isPartHit(currCell)) {
					continue;
				} else if (!helpers.isValidCellToAttack(currCell)) {
					break;
				} else {
					const itHit = attack(enemyGameboard, currRow, col);
					if (itHit) {
						computerAttackData.isHorizontal = false;
					}
					return itHit;
				}
			}

			for (let currRow = row - 1; currRow > row - 4; currRow--) {
				if (enemyGameboard.containsInvalidCoordinates(currRow, col)) {
					break;
				}
				const currCell = enemyGameboard.getGameboard()[currRow][col];
				if (helpers.isPartHit(currCell)) {
					continue;
				} else if (!helpers.isValidCellToAttack(currCell)) {
					break;
				} else {
					const itHit = attack(enemyGameboard, currRow, col);
					if (itHit) {
						computerAttackData.isHorizontal = false;
					}
					return itHit;
				}
			}
		}
	};

	const randomPlaceShips = (ownGameboard) => {
		for (let ship of helpers.getShips()) {
			let isShipPlaced = false;
			while (!isShipPlaced) {
				let row = Math.floor(Math.random() * 10);
				let col = Math.floor(Math.random() * 10);
				isShipPlaced = ownGameboard.placeShip(ship, row, col);
				if (!isShipPlaced) {
					ship.isHorizontal = !ship.isHorizontal;
					isShipPlaced = ownGameboard.placeShip(ship, row, col);
				}
			}
		}
	};

	const randomAttack = (enemyGameboard) => {
		let isAttackValid = false;
		let row;
		let col;
		let cell;
		while (!isAttackValid) {
			row = Math.floor(Math.random() * 10);
			col = Math.floor(Math.random() * 10);
			cell = enemyGameboard.getGameboard()[row][col];
			isAttackValid = helpers.isValidCellToAttack(cell);
		}
		const isPartHit = attack(enemyGameboard, row, col);
		if (isPartHit) {
			computerAttackData = {
				firstPartHitCoor: [row, col],
				ship: enemyGameboard.findShip(cell.shipId),
				isHorizontal: true,
			};
		}
		return isPartHit;
	};

	const computerAttack = (enemyGameboard) => {
		let isPartHit;
		const { ship } = computerAttackData;
		if (ship && !ship.isSunk()) {
			isPartHit = _computerAttackCrossDirection(enemyGameboard);
		} else {
			isPartHit = randomAttack(enemyGameboard);
		}
		return isPartHit;
	};

	const attack = (enemyGameboard, row, col) => {
		enemyGameboard.receiveAttack(row, col);
		const cell = enemyGameboard.getGameboard()[row][col];
		return helpers.isPartHit(cell);
	};

	return {
		randomPlaceShips,
		randomAttack,
		computerAttack,
		attack,
	};
};

export default player;
