import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia/dist/pinia";
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import TabMenu from "primevue/tabmenu";
import {i18n} from "@/lang/setup";

const pinia = createPinia();
createApp(App)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('Button', Button)
    .component('Toolbar', Toolbar)
    .component('TabMenu', TabMenu)
    .use(i18n)
    .use(PrimeVue)
    .use(pinia)
    .use(router)
    .mount('#app')
