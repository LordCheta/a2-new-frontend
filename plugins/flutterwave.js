import Vue from 'vue'
import Flutterwave from 'vue-flutterwave'

Vue.use(Flutterwave, { publicKey: process.env.flutterwave_public_key })
