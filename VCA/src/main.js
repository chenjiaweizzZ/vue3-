import { createApp } from 'vue'
// import App from './01_helloVCA/App.vue'
// import App from './02_setup定义数据_reactive&ref/App.vue'
// import App from './03_setup_其他函数/App.vue'
// import App from './04_toRefs/App.vue'
// import App from './05_ref_defineExpose/App.vue'
// import App from './05.1_ref_defineProps&defineEmits/App.vue'
// import App from './06_watch/App.vue'
// import App from './07_watchEffive/App.vue'
// import App from './08_hooks/App.vue'
import App from './09_router/App.vue'
import router from './09_router/router'
// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount("#app")

 