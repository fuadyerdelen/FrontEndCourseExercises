import {
	v4 as uuidv4
} from 'uuid';
import part from '../part/part';

const ship = (length) => {
	const id = uuidv4();

	const _getParts = (length) => {
		const parts = [];
		for (let i = 0; i < length; i++) {
			parts.push(part(id, i));
		}
		return parts;
	};

	return {
		id,
		length,
		isHorizontal: true,
		parts: _getParts(length),
		hit(index) {
			this.parts[index].hit();
		},
		isSunk() {
			return this.parts.every((part) => part.isHit);
		},
	};
};

export default ship;