 <template>
      <div>
        <div>App:name:{{ user.name }}</div>
        <div>App:age:{{ user.age }}</div>
        <user-info :user="user"></user-info> 
      </div>
 </template>

<script setup>
import { reactive } from 'vue';
import userInfo from './userInfo.vue'

const user = reactive({
    name: 'chenjiawei',
    age: 18
})
// const changeUser = (userName) => {
//     console.log(userName)
// }
</script>