import Vue from "nativescript-vue";

import Home from "./components/Home";
import {
    ModalStack,
    overrideModalViewMethod,
    VueWindowedModal
} from "nativescript-windowed-modal";
overrideModalViewMethod();

Vue.registerElement("ModalStack", () => ModalStack);
Vue.use(VueWindowedModal);
// Vue.config.silent = false;

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
