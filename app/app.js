import Vue from 'nativescript-vue'
import Home from './components/Home'
import Theme from "@nativescript/theme";
import base64 from "base-64";


Theme.setMode(Theme.Dark);
Vue.config.silent = false

process.env.LED_REST_URL = 'http://192.168.2.160:9000/api'
process.env.LED_REST_USER = 'LED-REST'
process.env.LED_REST_PASS = 'admin'
process.env.LED_REST_BASE = base64.encode(`${process.env.LED_REST_USER}:${process.env.LED_REST_PASS}`)

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
