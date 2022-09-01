import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './lang'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App),
loader: HTMLElement = document.getElementById('loader')!

window.onload = () => {
  setTimeout(() => loader.classList.replace('loader--enter', 'loader--leave'), 3000)
  setTimeout(() => loader.innerHTML = '', 3400)
  setTimeout(() => app
    .use(router)
    .use(i18n)
    .use(Vue3Lottie)
    .mount('#app')
  , 3400)
}
