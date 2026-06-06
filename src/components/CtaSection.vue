<template>
  <section class="cta">
    <div class="cta-bg" />
    <div class="inner">
      <h2 v-reveal>Готовы запустить свой сайт?</h2>
      <p v-reveal="100">Оставьте заявку — ответим в течение часа и обсудим вашу задачу бесплатно.</p>
      <button class="btn-primary cta-btn" v-reveal="200" @click="openModal">Оставить заявку</button>
    </div>
  </section>
</template>

<script setup>
import { useModal } from '../composables/useModal.js'
const { openModal } = useModal()
</script>

<style scoped>
.cta {
  background: var(--text); padding: 120px 24px; text-align: center;
  overflow: hidden; position: relative;
}
.cta-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 50% 120%, rgba(0,113,227,.25) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 80% -20%, rgba(191,90,242,.15) 0%, transparent 60%);
}
.inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
h2 {
  font-family: var(--font-d); font-size: clamp(36px,6vw,72px); font-weight: 800;
  letter-spacing: -2px; color: #fff; line-height: 1.05; margin-bottom: 20px;
}
p { font-size: 19px; color: rgba(255,255,255,.6); margin-bottom: 48px; line-height: 1.5; }
.cta-btn { background: #fff; color: var(--text); box-shadow: 0 4px 20px rgba(255,255,255,.2); }
.cta-btn:hover { background: rgba(255,255,255,.9); box-shadow: 0 8px 28px rgba(255,255,255,.3); }
</style>
