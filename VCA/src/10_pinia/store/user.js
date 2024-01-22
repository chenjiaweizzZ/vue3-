import { defineStore } from "pinia";

const useUser = defineStore('user', {
    state: () => ({
        user: {
            name: 'chenjiawei',
            token:'4g97evps3d'
        }
    })
})

export default useUser