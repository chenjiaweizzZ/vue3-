import { reactive } from 'vue'

export default function useScrollPosition() {
    const scrollPosition = reactive({
        x: 0,
        y: 0
    })
    document.addEventListener("scroll", () => {
        scrollPosition.x = window.scrollX
        scrollPosition.y = window.scrollY
    })
    return {
        scrollPosition
    }
}