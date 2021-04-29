require('./bootstrap');

import {createApp} from 'vue'
import App from 'Vue/App.vue'
import router from 'Vue/router'
import 'CSS/app.css'

createApp(App).use(router).mount('#app')