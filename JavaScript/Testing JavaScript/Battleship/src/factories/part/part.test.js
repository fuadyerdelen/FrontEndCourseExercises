import part from './part';

const shipId = 'abc123';
let shipObj;
let partObj;

beforeEach(() => {
	shipObj = {
		id: shipId,
		length: 2,
		parts: [part(shipId, 0), part(shipId, 1)],
	};
	partObj = shipObj.parts[0];
});

test('part properties', () => {
	expect(partObj.shipId).toBe(shipId);
	expect(partObj.index).toBe(0);
});

test('part hit method', () => {
	expect(partObj.isHit).toBe(false);
	partObj.hit();
	expect(partObj.isHit).toBe(true);
});
