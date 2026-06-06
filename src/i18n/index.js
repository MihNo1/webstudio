import { ref, readonly } from 'vue'
import ru from './ru.js'
import ro from './ro.js'
import en from './en.js'

const locales = { ru, ro, en }
const locale = ref(localStorage.getItem('ws-lang') || 'ru')

if (typeof document !== 'undefined') {
  document.documentElement.lang = locale.value
}

export function useI18n() {
  function t(key) {
    const parts = key.split('.')
    const val = parts.reduce((obj, k) => obj?.[k], locales[locale.value])
    return val ?? key
  }

  function tm(key) {
    const val = t(key)
    return Array.isArray(val) ? val : []
  }

  function setLocale(lang) {
    locale.value = lang
    localStorage.setItem('ws-lang', lang)
    document.documentElement.lang = lang
  }

  return { locale: readonly(locale), t, tm, setLocale }
}
