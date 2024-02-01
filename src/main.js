import { createApp, defineComponent } from "vue";
import App from "./App.vue";
import BaseButton from "./components/BaseElements/BaseButton.vue";
import BaseInput from "./components/BaseElements/BaseInput.vue";

const app = createApp(App);

const buttonWrapper = defineComponent(BaseButton);
const inputWrapper = defineComponent(BaseInput);

app.component("BaseButton", buttonWrapper);
app.component("BaseInput", inputWrapper);

app.mount("#app");
