import { ref } from 'vue'

const isOpen = ref(false)

export function useModal() {
  return {
    isOpen,
    openModal() {
      isOpen.value = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      isOpen.value = false
      document.body.style.overflow = ''
    },
  }
}
