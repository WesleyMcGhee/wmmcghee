import './assets/main.css';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiGithub, BiLinkedin } from "oh-vue-icons/icons";

import { createApp } from 'vue';
import App from './App.vue';

addIcons(BiGithub, BiLinkedin);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.mount("#app");
