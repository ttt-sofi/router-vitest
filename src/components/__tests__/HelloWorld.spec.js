import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("Debería renderizar correctamente y coincidir con el snapshot", () => {
    // Monta el componente
    const wrapper = mount(HomeView);

    // Verifica el snapshot del HTML renderizado
    expect(wrapper.html()).toMatchSnapshot();
  });
});