import { defineStore } from "pinia";

const useCounter = defineStore('counter', {
    state: () => ({
        counter: 99
    })
})

export default useCounter