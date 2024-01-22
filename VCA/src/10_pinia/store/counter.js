import { defineStore } from "pinia";
import useUser from "./user";

const useCounter = defineStore('counter', {
    state: () => ({
        counter: 0,
        name: 'chenjiawei',
        friendList: [
            { id: 1, name: 'chenjiawei' },
            { id: 2, name: 'chenxiaowei' },
            { id: 3, name: 'chenxiaosan' }
        ]
    }),
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        },
        getMyfriendById(state) {
            return id =>  {
                return state.friendList.find(i => i.id === id)?.name || '用户不存在'
                // return id
            }
        },
        showMessage(state) {
            const userStore = useUser()
            return `${userStore.user.name}${state.counter}`
        }
    }
})

export default useCounter