// add function
// input
// output

// component
// input
//  props
//  用户交互 --- click
//  slots
// output
//  vue events
//  rendered output
//  function calls

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
	it("renders props.msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg },
		});
		console.log(wrapper.text());
		console.log(wrapper.html());
		expect(wrapper.text()).toMatch(msg);
	});
});
