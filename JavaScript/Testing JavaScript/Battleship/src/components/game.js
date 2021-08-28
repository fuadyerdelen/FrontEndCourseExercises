import dom from '../dom/dom';
import gameboard from '../../factories/gameboard/gameboard';
import player from '../../factories/player/player';
import helpers from '../helpers/helpers';

const game = (() => {
	const gameboard1 = gameboard(10);
	const gameboard2 = gameboard(10);
	const player1 = player();
	const player2 = player();
	const mainPlayer = 'player1';
	let activePlayer = player1;
	let activeGameboard = gameboard2;
	let winner;
	const playersInfo = {
		player1: {
			gameboard: gameboard1,
			renderTo: dom.gameboard1Container,
			name: 'gameboard1',
			isDisabled() {
				return activeGameboard === gameboard2;
			},
			isMainPlayer: mainPlayer === 'player1' ? true : false,
		},
		player2: {
			gameboard: gameboard2,
			renderTo: dom.gameboard2Container,
			name: 'gameboard2',
			isDisabled() {
				return activeGameboard === gameboard1;
			},
			isMainPlayer: mainPlayer === 'player2' ? true : false,
		},
	};

	const _randomPlaceShips = (gameboard1, gameboard2) => {
		player1.randomPlaceShips(gameboard1);
		player2.randomPlaceShips(gameboard2);
	};

	const _getWinner = (gameboard1, gameboard2) => {
		if (gameboard1.areAllShipsDestroyed()) {
			return player2;
		} else if (gameboard2.areAllShipsDestroyed()) {
			return player1;
		} else {
			return null;
		}
	};

	const _switchActivePlayer = () => {
		activePlayer = activePlayer === player1 ? player2 : player1;
		activeGameboard = activeGameboard === gameboard1 ? gameboard2 : gameboard1;
	};

	const _updateGameboard = () => {
		dom.renderGameboard(
			playersInfo.player1,
			null,
			_handleShipDragStart,
			_handleCellDrop,
			_handleShipClick
		);
		dom.renderGameboard(playersInfo.player2, _handleCellAttack);
	};

	const _newRound = (isFirstRound, isNewPlayer) => {
		winner = _getWinner(gameboard1, gameboard2);
		if (winner) {
			_updateGameboard();
			const winnerText = winner === player1 ? 'player1' : 'player2';
			alert(`Winner is ${winnerText}`);
			return;
		}
		if (!isFirstRound && isNewPlayer) {
			_switchActivePlayer();
		}
		_updateGameboard();
		if (activePlayer === player2) {
			const isPartHit = player2.computerAttack(gameboard1);
			setTimeout(() => {
				_newRound(false, !isPartHit);
			}, 500);
		}
	};

	const _handleStartClick = () => {
		dom.style(false, dom.gameboard2Container, ['display-none']);
		_newRound(true, true);
		dom.disableOwnShipsClick();
		dom.removeOptions(_handleStartClick, _handleRandomiseClick);
	};

	const _handleRandomiseClick = () => {
		gameboard1.emptyGameboard();
		player1.randomPlaceShips(gameboard1);
		dom.renderGameboard(
			playersInfo.player1,
			null,
			_handleShipDragStart,
			_handleCellDrop,
			_handleShipClick
		);
		dom.enableGameboard('gameboard1');
	};

	const _handleCellAttack = (e) => {
		if (winner) {
			return;
		}
		const target = e.target;
		const row = parseInt(target.dataset.row, 10);
		const col = parseInt(target.dataset.col, 10);
		const cell = activeGameboard.getGameboard()[row][col];
		if (helpers.isValidCellToAttack(cell)) {
			const itHit = activePlayer.attack(activeGameboard, row, col);
			_newRound(false, !itHit);
		}
	};

	const _handleShipDragStart = (e) => {
		e.dataTransfer.setData('text/plain', e.target.dataset.shipId);
	};

	const _handleCellDrop = (e) => {
		// Prevent default action (open as link when i drop a ship in a cell)
		e.preventDefault();
		const target = e.target;
		if (!target.classList.contains('cell')) {
			return;
		}
		const shipId = e.dataTransfer.getData('text/plain');
		const shipObj = gameboard1.findShip(shipId);
		const shipDiv = document.querySelector(`[data-ship-id="${shipId}"]`);
		const shipDivCell = shipDiv.parentNode;
		const row = parseInt(target.dataset.row, 10);
		const col = parseInt(target.dataset.col, 10);
		const rowOld = parseInt(shipDivCell.dataset.row, 10);
		const colOld = parseInt(shipDivCell.dataset.col, 10);

		gameboard1.removeShip(shipObj);

		// Append the dragged ship to selected cell
		if (
			gameboard1.isPlacementValid(
				shipObj.length,
				shipObj.isHorizontal,
				row,
				col
			)
		) {
			gameboard1.placeShip(shipObj, row, col);
		} else {
			gameboard1.placeShip(shipObj, rowOld, colOld);
		}
		dom.renderGameboard(
			playersInfo.player1,
			null,
			_handleShipDragStart,
			_handleCellDrop,
			_handleShipClick
		);
		dom.enableGameboard('gameboard1');
	};

	const _handleShipClick = (e) => {
		const target = e.target;
		const shipId = target.dataset.shipId;
		const shipObj = gameboard1.findShip(shipId);
		const shipDiv = document.querySelector(`[data-ship-id="${shipId}"]`);
		const shipDivCell = shipDiv.parentNode;
		const row = parseInt(shipDivCell.dataset.row, 10);
		const col = parseInt(shipDivCell.dataset.col, 10);

		gameboard1.removeShip(shipObj);
		shipObj.isHorizontal = !shipObj.isHorizontal;
		if (!gameboard1.placeShip(shipObj, row, col)) {
			shipObj.isHorizontal = !shipObj.isHorizontal;
			gameboard1.placeShip(shipObj, row, col);
		}
		dom.renderGameboard(
			playersInfo.player1,
			null,
			_handleShipDragStart,
			_handleCellDrop,
			_handleShipClick
		);
		dom.enableGameboard('gameboard1');
	};

	const init = () => {
		_randomPlaceShips(gameboard1, gameboard2);
		dom.init(
			playersInfo,
			_handleStartClick,
			_handleRandomiseClick,
			_handleShipDragStart,
			_handleCellDrop,
			_handleShipClick
		);
	};

	return { init };
})();

export default game;
