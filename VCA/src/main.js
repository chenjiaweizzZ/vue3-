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
import App from './08_hooks2/App.vue'
// import App from './09_router/App.vue'
// import App from './10_pinia/App.vue'
import router from './09_router/router'
import pinia from './10_pinia/store'
// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount("#app")

