import helpers from './helpers';

test('helpers getShips method', () => {
	const ships = helpers.getShips();
	expect(ships.length).toBe(10);
	for (let i = 1; i < 5; i++) {
		const shipsByLength = ships.filter((ship) => ship.length === 5 - i);
		expect(shipsByLength.length).toBe(i);
	}
});
