// we need our modal component
/* eslint-disable */
import modal from './Modal.vue';

modal.install = (Vue, options = {}) => {
  Vue.prototype.$modal = new (Vue.extend(modal))({ propsData: options });
  Vue.modal = Vue.prototype.$modal;
  if (process.env.NODE_ENV === 'development') window.modal = Vue.prototype.modal;
};
export default modal;
