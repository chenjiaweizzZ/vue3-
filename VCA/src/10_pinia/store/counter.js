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
        ],
        banners: [],
        recommends: []
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
    },
    actions: {
        async fetchHomeMultidata() {
            const res = await fetch('http://123.207.32.32:8000/home/multidata')
            const data = await res.json()
            this.banners = data.data.banner.list
            this.recommends = data.data.recommend.list
            console.log(this.banners,this.recommends)
        },
        async fetchHomeMultidata2() {
            const res = await fetch('http://123.207.32.32:8000/home/multidata')
            const data = await res.json()
            return data
        }
    }
})

export default useCounter