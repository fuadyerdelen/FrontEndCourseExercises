import './ship.css';
import helpers from '../../modules/helpers/helpers';

const ship = (
	cell,
	gameboardObj,
	isMainPlayer,
	handleShipDragStart,
	handleShipClick
) => {
	const shipObj = gameboardObj.findShip(cell.shipId);
	const shipDiv = document.createElement('div');
	shipDiv.classList.add('ship');
	if (isMainPlayer) {
		shipDiv.dataset.ownShip = 'true';
		shipDiv.dataset.shipId = shipObj.id;
		shipDiv.setAttribute('draggable', 'true');
		shipDiv.addEventListener('dragstart', handleShipDragStart);
		shipDiv.addEventListener('click', handleShipClick);
	} else {
		shipDiv.classList.add('pointer-events-none');
	}
	if (shipObj.isSunk()) {
		shipDiv.classList.add('ship-sunk');
	}
	if (shipObj.isHorizontal) {
		shipDiv.classList.add('ship-horizontal');
	}
	shipObj.parts.forEach((part) => {
		const partDiv = document.createElement('div');
		partDiv.classList.add('part', 'pointer-events-none');
		if (helpers.isFunctionalPart(part)) {
			partDiv.classList.add('part-functional');
		} else if (helpers.isPartHit(part)) {
			partDiv.classList.remove('part-functional');
			partDiv.classList.add('part-hit');
		}
		shipDiv.appendChild(partDiv);
	});
	return shipDiv;
};

export default ship;
