<template>
  <nav :class="{ scrolled }">
    <a href="#" class="nav-logo">Web<span>Studio</span></a>
    <ul class="nav-links">
      <li><a href="#services">Услуги</a></li>
      <li><a href="#process">Процесс</a></li>
      <li><a href="#portfolio">Работы</a></li>
      <li><a href="#pricing">Цены</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
    <button class="nav-cta" @click="openModal">Оставить заявку</button>
    <button class="nav-burger" :class="{ open: mobileOpen }" @click="toggleMobile" aria-label="Меню">
      <span /><span /><span />
    </button>
  </nav>

  <div class="mobile-menu" :class="{ open: mobileOpen }">
    <a href="#services" @click="closeMobile">Услуги</a>
    <a href="#process" @click="closeMobile">Процесс</a>
    <a href="#portfolio" @click="closeMobile">Работы</a>
    <a href="#pricing" @click="closeMobile">Цены</a>
    <a href="#faq" @click="closeMobile">FAQ</a>
    <button class="mobile-cta" @click="openModal(); closeMobile()">Оставить заявку</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useModal } from '../composables/useModal.js'

const { openModal } = useModal()
const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() { scrolled.value = window.scrollY > 20 }

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}

function closeMobile() {
  mobileOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 max(24px, calc((100% - 1200px) / 2));
  height: 60px; display: flex; align-items: center; justify-content: space-between;
  transition: background .3s, backdrop-filter .3s, border-bottom .3s;
}
nav.scrolled {
  background: rgba(255,255,255,0.82);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: var(--font-d); font-weight: 700; font-size: 20px;
  color: var(--text); text-decoration: none; letter-spacing: -.3px;
}
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { font-size: 15px; color: var(--text); text-decoration: none; opacity: .8; transition: opacity .2s; }
.nav-links a:hover { opacity: 1; }
.nav-cta {
  background: var(--text); color: #fff; font-family: var(--font-b);
  font-size: 15px; font-weight: 500; padding: 9px 20px; border-radius: 980px; border: none; cursor: pointer;
  transition: opacity .2s, transform .2s;
}
.nav-cta:hover { opacity: .85; transform: scale(.98); }
.nav-burger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; background: none; border: none; }
.nav-burger span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: .3s; }
.nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(255,255,255,.97); backdrop-filter: blur(20px);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px;
  opacity: 0; pointer-events: none; transition: opacity .3s;
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu a { font-family: var(--font-d); font-size: 28px; font-weight: 700; color: var(--text); text-decoration: none; letter-spacing: -1px; }
.mobile-cta { font-family: var(--font-d); font-size: 20px; font-weight: 700; color: var(--accent); background: none; border: none; cursor: pointer; }

@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .nav-burger { display: flex; }
}
</style>
