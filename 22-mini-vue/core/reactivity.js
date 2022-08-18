export class Dep {
	constructor(value) {
		this._val = value;
		this.effects = new Set();
	}

	get value() {
		this.depend();
		return this._val;
	}

	set value(val) {
		this._val = val;
		this.notice();
	}

	// 收集依赖
	depend() {
		if (currentEffect) {
			this.effects.add(currentEffect);
			console.log(this.effects);
		}
	}

	// 触发依赖
	notice() {
		this.effects.forEach(effect => {
			effect();
		});
	}
}

let currentEffect = null;
export function effectWatch(fn) {
	currentEffect = fn;
	fn();
	currentEffect = null;
}
