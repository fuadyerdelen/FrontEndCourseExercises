import './cell.css';
import ship from './ship/ship';
import helpers from '../modules/helpers/helpers';

const cell = (
	cell,
	gameboardObj,
	isMainPlayer,
	row,
	col,
	handleCellAttack,
	handleShipDragStart,
	handleCellDrop,
	handleShipClick
) => {
	const cellDiv = document.createElement('div');
	cellDiv.classList.add('cell');
	cellDiv.dataset.row = row;
	cellDiv.dataset.col = col;
	if (isMainPlayer) {
		const allowDrop = (e) => {
			// Prevent default to allow drop
			e.preventDefault();
		};
		cellDiv.addEventListener('dragover', allowDrop);
		cellDiv.addEventListener('drop', handleCellDrop);
	}
	if (!helpers.isCellVacant(cell)) {
		if (helpers.isMissedCell(cell)) {
			cellDiv.classList.add('cell-missed');
		} else if (
			(isMainPlayer && helpers.isPart(cell) && cell.index === 0) ||
			(!isMainPlayer &&
				helpers.isPart(cell) &&
				cell.index === 0 &&
				gameboardObj.findShip(cell.shipId).isSunk())
		) {
			const shipDiv = ship(
				cell,
				gameboardObj,
				isMainPlayer,
				handleShipDragStart,
				handleShipClick
			);
			cellDiv.appendChild(shipDiv);
		} else if (!isMainPlayer && helpers.isPart(cell) && cell.isHit) {
			cellDiv.classList.add('part-hit');
		}
	}
	if (!isMainPlayer && handleCellAttack) {
		cellDiv.onclick = handleCellAttack;
	}
	return cellDiv;
};

export default cell;
