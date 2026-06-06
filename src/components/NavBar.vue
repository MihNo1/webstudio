<template>
  <nav :class="{ scrolled }">
    <a href="#" class="nav-logo">Web<span>Studio</span></a>
    <ul class="nav-links">
      <li><a href="#services">{{ t('nav.services') }}</a></li>
      <li><a href="#process">{{ t('nav.process') }}</a></li>
      <li><a href="#portfolio">{{ t('nav.portfolio') }}</a></li>
      <li><a href="#pricing">{{ t('nav.pricing') }}</a></li>
      <li><a href="#faq">{{ t('nav.faq') }}</a></li>
    </ul>
    <div class="nav-right">
      <div class="lang-switcher">
        <button
          v-for="lang in langs"
          :key="lang"
          :class="{ active: locale === lang }"
          @click="setLocale(lang)"
        >{{ lang.toUpperCase() }}</button>
      </div>
      <button class="nav-cta" @click="openModal">{{ t('nav.cta') }}</button>
    </div>
    <button class="nav-burger" :class="{ open: mobileOpen }" @click="toggleMobile" aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>

  <div class="mobile-menu" :class="{ open: mobileOpen }">
    <div class="mobile-lang">
      <button v-for="lang in langs" :key="lang" :class="{ active: locale === lang }" @click="setLocale(lang)">
        {{ lang.toUpperCase() }}
      </button>
    </div>
    <a href="#services"  @click="closeMobile">{{ t('nav.services') }}</a>
    <a href="#process"   @click="closeMobile">{{ t('nav.process') }}</a>
    <a href="#portfolio" @click="closeMobile">{{ t('nav.portfolio') }}</a>
    <a href="#pricing"   @click="closeMobile">{{ t('nav.pricing') }}</a>
    <a href="#faq"       @click="closeMobile">{{ t('nav.faq') }}</a>
    <button class="mobile-cta" @click="openModal(); closeMobile()">{{ t('nav.cta') }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useModal } from '../composables/useModal.js'
import { useI18n } from '../i18n/index.js'

const { openModal } = useModal()
const { locale, t, setLocale } = useI18n()

const langs = ['ru', 'ro', 'en']
const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() { scrolled.value = window.scrollY > 20 }
function toggleMobile() { mobileOpen.value = !mobileOpen.value; document.body.style.overflow = mobileOpen.value ? 'hidden' : '' }
function closeMobile() { mobileOpen.value = false; document.body.style.overflow = '' }

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 max(24px, calc((100% - 1200px) / 2));
  height: 64px; display: flex; align-items: center; justify-content: space-between;
  transition: background .3s, backdrop-filter .3s, border-bottom .3s;
}
nav.scrolled {
  background: rgba(255,255,255,0.82);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-family: var(--font-d); font-weight: 700; font-size: 20px; color: var(--text); text-decoration: none; letter-spacing: -.3px; }
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 28px; list-style: none; }
.nav-links a { font-size: 15px; color: var(--text); text-decoration: none; opacity: .8; transition: opacity .2s; }
.nav-links a:hover { opacity: 1; }

.nav-right { display: flex; align-items: center; gap: 12px; }

.lang-switcher {
  display: flex; align-items: center;
  background: var(--bg-2); border: 1px solid var(--border); border-radius: 980px;
  padding: 3px; gap: 2px;
}
.lang-switcher button {
  font-family: var(--font-b); font-size: 12px; font-weight: 600; letter-spacing: .5px;
  padding: 5px 10px; border-radius: 980px; border: none; cursor: pointer;
  background: transparent; color: var(--muted); transition: background .2s, color .2s;
}
.lang-switcher button.active { background: #fff; color: var(--text); box-shadow: 0 1px 4px rgba(0,0,0,.08); }
.lang-switcher button:hover:not(.active) { color: var(--text); }

.nav-cta {
  background: var(--text); color: #fff; font-family: var(--font-b);
  font-size: 15px; font-weight: 500; padding: 9px 20px; border-radius: 980px; border: none; cursor: pointer;
  transition: opacity .2s, transform .2s; white-space: nowrap;
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
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px;
  opacity: 0; pointer-events: none; transition: opacity .3s;
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu a { font-family: var(--font-d); font-size: 26px; font-weight: 700; color: var(--text); text-decoration: none; letter-spacing: -1px; }
.mobile-cta { font-family: var(--font-d); font-size: 20px; font-weight: 700; color: var(--accent); background: none; border: none; cursor: pointer; }
.mobile-lang { display: flex; gap: 8px; margin-bottom: 8px; }
.mobile-lang button {
  font-family: var(--font-b); font-size: 13px; font-weight: 600; letter-spacing: .5px;
  padding: 7px 16px; border-radius: 980px; border: 1.5px solid var(--border-h); cursor: pointer;
  background: transparent; color: var(--muted); transition: all .2s;
}
.mobile-lang button.active { background: var(--text); color: #fff; border-color: var(--text); }

@media (max-width: 768px) {
  .nav-links, .nav-right { display: none; }
  .nav-burger { display: flex; }
}
</style>
