import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import {describe,test, expect} from "vitest";

describe("AboutView", () => {
  test("Probando la existencia del componente o vista AboutView ", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "AboutViewVue",
          component: AboutView,
        },
      ],
    });
    router.push("/about");
    await router.isReady();
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("Debería contener el texto 'Vista de About'", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain("Vista de About");
  });
});