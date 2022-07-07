import { mount } from "@vue/test-utils";
import Foo from "../../src/components/Foo.vue";

describe("Foo.vue", () => {
	it("count", async () => {
		const wrapper = mount(Foo);

		await wrapper.get("#btn").trigger("click");
		// 异步操作
		// input serValue()
		// setChecked
		// setProps

		// console.log(wrapper.text());
		expect(wrapper.text()).toContain("2");
	});

	it("input", async () => {
		// async await 处理异步
		const wrapper = mount(Foo);

		await wrapper.get("#ipt").setValue("hello world");

		expect(wrapper.text()).toContain("hello world");
	});

	it("input", done => {
		// 回调处理异步
		const wrapper = mount(Foo);

		wrapper
			.get("#ipt")
			.setValue("hello world")
			.then(() => {
				expect(wrapper.text()).toContain("hello world");
				done();
			});
	});
});
