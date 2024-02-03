import './assets/main.css';
import axios from "axios";
import VueAxios from 'vue-axios';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiGithub, BiLinkedin } from "oh-vue-icons/icons";

import { createApp } from 'vue';
import App from './App.vue';

addIcons(BiGithub, BiLinkedin);

const app = createApp(App)
app.use(VueAxios, axios)
app.component("v-icon", OhVueIcon);
app.mount("#app");
