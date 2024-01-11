import { ref } from 'vue';
export default function userCounter() {
    const num = ref(100)
    const increment = () => {
        num.value ++
    }
    const decrement = () => {
        num.value --
    }
    return { num, increment, decrement}
}