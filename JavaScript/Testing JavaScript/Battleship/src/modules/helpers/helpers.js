import ship from '../../factories/ship/ship';

const helpers = (() => {
	const _shipCreator = (length, quantity) => {
		const ships = [];
		for (let i = 0; i < quantity; i++) {
			const shipObj = ship(length);
			ships.push(shipObj);
		}
		return ships;
	};

	const getShips = () => {
		const ships = [];
		for (let i = 1; i < 5; i++) {
			const createdShips = _shipCreator(5 - i, i);
			ships.push(...createdShips);
		}
		return ships;
	};

	const isCellVacant = (cell) => {
		return cell === null;
	};

	const isMissedCell = (cell) => {
		return cell === 'missed';
	};

	const isFunctionalPart = (part) => {
		return isPart(part) && !part.isHit;
	};

	const isValidCellToAttack = (cell) => {
		return cell === undefined || isMissedCell(cell) || isPartHit(cell)
			? false
			: true;
	};

	const isPartHit = (part) => {
		return isPart(part) && part.isHit;
	};

	const isShipDestroyed = (part, gameboard) => {
		const shipId = part.shipId;
		const ship = gameboard.findShip(shipId);
		return ship.isSunk();
	};

	const isPart = (cell) => {
		return cell && !!cell.shipId;
	};

	return {
		getShips,
		isCellVacant,
		isMissedCell,
		isFunctionalPart,
		isValidCellToAttack,
		isPartHit,
		isShipDestroyed,
		isPart,
	};
})();

export default helpers;
