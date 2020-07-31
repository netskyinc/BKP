require('./bootstrap');
const VueInputMask = require('vue-inputmask').default
import * as TastyBurgerButton from 'vue-tasty-burgers';
import retina from 'retinajs';
import './main';
import SweetAlertIcons from 'vue-sweetalert-icons';

window.Vue = require('vue');
Vue.use(VueInputMask)
Vue.use(TastyBurgerButton);
Vue.use(SweetAlertIcons);
window.addEventListener('load', retina);

Vue.component('commercial-component', require('./components/CommercialComponent.vue').default);
Vue.component('main-form', require('./components/MainForm.vue').default);
Vue.component('price-form', require('./components/PriceForm.vue').default);
Vue.component('modal-form', require('./components/ModalForm.vue').default);
Vue.component('mobile-menu', require('./components/MobileMenu.vue').default);


const questions = new Vue({
    el: '#questions',
});
const mainform = new Vue({
    el: '#mainform',
});
const priceform = new Vue({
    el: '#priceform',
});
const modalform = new Vue({
    el: '#modalform',
});
const mobilemenu = new Vue({
    el: '#mobilemenu',
});
