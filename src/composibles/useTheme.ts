import { ref } from "vue";

const isDark = ref(false)

export function useTheme() {
    const updateTheme = (dark: boolean) => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('dark-mode', dark ? 'true' : 'false')
    }
    const toggleTheme = () => {
        isDark.value = !isDark.value
        updateTheme(isDark.value)
    }
    const initTheme = () => {
        const savedTheme = localStorage.getItem('dark-mode')
        if (savedTheme) {
            isDark.value = savedTheme === 'true'
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        updateTheme(isDark.value)
    }
    return {
        isDark, toggleTheme, initTheme
    }
}