import { mount } from "@vue/test-utils";
import Bar from "../../src/components/Bar.vue";
import flushPromises from "flush-promises";

jest.mock("axios", () => {
	return {
		get() {
			return new Promise(resolve => {
				resolve({ data: "heihei" });
			});
		},
	};
});

describe("Bar.vue", () => {
	// 传统方式
	// it("get Users", async done => {
	// 	const wrapper = mount(Bar);

	// 	await wrapper.get("#btn").trigger("click");

	// 	console.log(wrapper.text());
	// 	setTimeout(() => {
	// 		expect(wrapper.text()).toContain("heihei");
	// 		done();
	// 	}, 0);
	// });

	// 使用插件
	it("get Users", async () => {
		const wrapper = mount(Bar);

		await wrapper.get("#btn").trigger("click");
		await flushPromises;
		expect(wrapper.text()).toContain("heihei");
	});
});
