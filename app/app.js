import Vue from 'nativescript-vue'
import Home from './components/Home'
import DrawerPlugin from '@nativescript-community/ui-drawer/vue'

Vue.use(DrawerPlugin);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
