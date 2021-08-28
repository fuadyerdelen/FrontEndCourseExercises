import ship from './ship';

let shipObj;

beforeEach(() => {
	shipObj = ship(4);
});

test('ship properties', () => {
	expect(shipObj.id).toBeTruthy();
	expect(shipObj.length).toBe(4);
	expect(shipObj.isHorizontal).toBe(true);
	expect(shipObj.parts.length).toBe(4);
	const isAllFunctional = (part) => part.isHit === false;
	expect(shipObj.parts.every(isAllFunctional)).toBe(true);
});

test('ship hit method', () => {
	expect(shipObj.parts[1].isHit).toBe(false);
	shipObj.hit(1);
	expect(shipObj.parts[1].isHit).toBe(true);
});

test('ship isSunk method', () => {
	expect(shipObj.isSunk()).toBe(false);
	for (let i = 0; i < 4; i++) {
		shipObj.hit(i);
	}
	expect(shipObj.isSunk()).toBe(true);
});
