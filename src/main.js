import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Toast, {POSITION} from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


const options = {
    position: POSITION.BOTTOM_LEFT,
    timeout: 2500
};

createApp(App).use(router).use(Toast, options).use(store).mount('#app')






