<template>
    <div>home2</div>
    <div>{{ counterStore.counter }}</div>
    <h2>轮播数据</h2>
    <ul>
        <template v-for="item in counterStore.banners">
            <li>
                {{ item.title }}
            </li>
        </template>
    </ul>
</template>

<script setup name="home1">
import { onMounted } from 'vue';
import useCounter from '../store/counter'

const counterStore = useCounter()

counterStore.fetchHomeMultidata()

onMounted(() => {
    counterStore.fetchHomeMultidata2().then(res => {
        console.log(111,res)
    })
})

</script>