export default {
	enemy: {
		// speed: 10,
		speed() {
			return Math.floor(Math.random() * 10) + 5;
		},
	},
	plane: {
		bullet: {
			speed: 10,
		},
	},
};
