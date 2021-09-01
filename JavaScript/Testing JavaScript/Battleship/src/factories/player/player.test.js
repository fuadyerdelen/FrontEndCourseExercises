import player from './player';
import gameboard from '../gameboard/gameboard';
import ship from '../ship/ship';

let playerBoard;
let aiBoard;
let playerObj;
let aiObj;
let aiShip1;

beforeEach(() => {
	playerBoard = gameboard(10);
	aiBoard = gameboard(10);
	playerObj = player();
	aiObj = player();
	aiShip1 = ship(4);
});

test('player randomPlaceShips method', () => {
	let partsCounter = 0;
	aiObj.randomPlaceShips(aiBoard);
	aiBoard.getGameboard().forEach((row) => {
		row.forEach((cell) => {
			if (cell && cell.shipId) {
				partsCounter += 1;
			}
		});
	});
	expect(partsCounter).toBe(20);
	expect(aiBoard.getShips().length).toBe(10);
});

test('player randomAttack method', () => {
	let missedAttack = 0;
	let hitCounter = 0;
	playerObj.randomPlaceShips(playerBoard);
	const withHealthyCell = (gameboard) => {
		for (let row = 0; row < gameboard.size; row++) {
			for (let col = 0; col < gameboard.size; col++) {
				const cell = gameboard.getGameboard()[row][col];
				if ((cell && cell.shipId && !cell.isHit) || cell === null) {
					return true;
				}
			}
		}
		return false;
	};
	while (withHealthyCell(playerBoard)) {
		aiObj.randomAttack(playerBoard);
	}
	playerBoard.getGameboard().forEach((row) => {
		row.forEach((cell) => {
			if (cell === 'missed') {
				missedAttack += 1;
			} else if (cell && cell.isHit) {
				hitCounter += 1;
			}
		});
	});
	expect(missedAttack).toBe(80);
	expect(hitCounter).toBe(20);
});

describe('player attack method', () => {
	test('attacks enemy gameboard', () => {
		expect(aiBoard.placeShip(aiShip1, 0, 0)).toBe(true);
		const shipsFirstPart = aiShip1.parts[0];
		expect(shipsFirstPart.isHit).toBe(false);
		expect(playerObj.attack(aiBoard, 0, 0)).toBe(true);
		expect(shipsFirstPart.isHit).toBe(true);
	});

	test('return true if it hit a ship', () => {
		expect(playerObj.attack(aiBoard, 2, 2)).toBe(false);
		expect(aiBoard.placeShip(aiShip1, 0, 0)).toBe(true);
		expect(playerObj.attack(aiBoard, 0, 0)).toBe(true);
	});
});
