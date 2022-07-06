const add = require("../add");

// test 等价于 it
// test 常用于单独测试
// it 常用于describe包裹内

describe("add", () => {
	test("1+1=2", () => {
		// 准备数据 -> given
		const a = 1;
		const b = 1;

		// 触发测试动作 -> when
		const result = add(a, b);

		// jest -> 断言
		// toBe -> jest匹配器
		// 验证 -> then
		expect(result).toBe(2);
	});

	test("2+3=5", () => {
		// 准备数据 -> given
		const a = 2;
		const b = 3;

		// 触发测试动作 -> when
		const result = add(a, b);

		// jest -> 断言
		// toBe -> jest匹配器
		// 验证 -> then
		expect(result).toBe(5);
	});

	test("判断2个对象是否相等", () => {
		const objA = {
			name: "objA",
		};
		const objB = {
			name: "objB",
		};
		// expect(objA).toEqual(objB);
		expect(objA).toEqual(objA);
	});

	test("string contain str", () => {
		const str = "string";

		expect(str).toContain("str");
		expect(str).not.toContain("hello");
	});
});
