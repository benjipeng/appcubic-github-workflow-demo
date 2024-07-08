import { ref } from 'vue'

const isColorful = ref(false)

export function useColorMode() {
    const toggleColorMode = () => {
        isColorful.value = !isColorful.value
        localStorage.setItem('color-mode', isColorful.value ? 'colorful' : 'normal')
    }

    const initColorMode = () => {
        const savedMode = localStorage.getItem('color-mode')
        isColorful.value = savedMode === 'colorful'
    }

    return {
        isColorful,
        toggleColorMode,
        initColorMode
    }
}