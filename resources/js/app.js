require('./bootstrap');
import { createApp, useAttrs } from 'vue';
import App from './vue/app.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faBan)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
