import { shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";

describe("TodoItem.vue", () => {
	it("input: props,output: view", () => {
		// given
		const todo = {
			text: "吃饭",
		};

		// when
		const wrapper = shallowMount(TodoItem, {
			propsData: { todo },
		});

		// then
		expect(wrapper.text()).toMatch("吃饭");
	});

	it("input: slot, output: view", () => {
		const todo = {
			text: "吃饭",
		};

		const wrapper = shallowMount(TodoItem, {
			propsData: { todo },
			slots: { default: "hi slot" },
		});

		expect(wrapper.text()).toMatch("hi slot");
	});

	it("input: user click, output: emit", () => {
		const wrapper = shallowMount(TodoItem, {
			propsData: { todo: { text: "hello", id: 1 } },
		});

		// id获取按钮
		wrapper.get("#removeBtn").trigger("click");

		console.log(wrapper.emitted());

		expect(wrapper.emitted("removeTodo")[0]).toEqual([1]);
	});
});
