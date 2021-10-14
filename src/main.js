import * as Vue from "vue";
import App from "~/App";
import store from "~/store";
import router from "~/routes";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = Vue.createApp(App).use(Quasar, quasarUserOptions);
app.use(store);
app.use(router);
app.mount("#app");
