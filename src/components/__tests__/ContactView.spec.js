import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";
import {describe,test, expect} from "vitest";

describe("ContactView", () => {
    test("Probando la existencia del componente o vista ContactView ", async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: "/contact",
                    name: "ContactViewVue",
                    component: ContactView,
                },
            ],
        });
        router.push("/contact");
        await router.isReady();
        const wrapper = mount(ContactView, {
            global: {
                plugins: [router],
            },
        });
        expect(wrapper.findComponent(ContactView).exists()).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
        });

        test("Debería contener el texto 'Vista de Contacto'", () => {
            const wrapper = mount(ContactView);
            expect(wrapper.text()).toContain("Vista de Contacto");
          });
});