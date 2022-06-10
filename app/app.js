import Vue from 'nativescript-vue'
import Home from './components/Home'
import Theme from "@nativescript/theme";
import base64 from "base-64";

Theme.setMode(Theme.Dark);
Vue.config.silent = false

process.env.LED_REST_URL = 'https://led-rest.holfelder.cloud/api'
process.env.LED_REST_USER = 'LED-REST'
process.env.LED_REST_PASS = 'hidh98jlhxl'
process.env.LED_REST_BASE = base64.encode(`${process.env.LED_REST_USER}:${process.env.LED_REST_PASS}`)
process.env.MODULE = {name: 'Led-App'}
process.env.IS_MODE = false;
process.env.CURRENT_MODE = null;
process.env.CURRENT_COLOR = null;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
