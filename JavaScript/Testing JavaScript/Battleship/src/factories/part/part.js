const part = (shipId, index) => ({
	shipId,
	index,
	isHit: false,
	hit() {
		this.isHit = true;
	},
});

export default part;
