<template>
  <section id="services">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('services.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('services.title') }}</h2>
        <p class="section-sub" v-reveal="200">{{ t('services.sub') }}</p>
      </div>
      <div class="grid">
        <div v-for="(s, i) in services" :key="i" class="card" v-reveal="i * 80">
          <div class="icon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, tm } = useI18n()
const services = computed(() => tm('services.items'))
</script>

<style scoped>
section { background: var(--bg); }
.grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 20px; }
.card { grid-column: span 2; }
.card:nth-child(4) { grid-column: 2 / 4; }
.card:nth-child(5) { grid-column: 4 / 6; }
.card { background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 36px 32px; transition: transform .3s, box-shadow .3s, border-color .3s; }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--border-h); }
.icon { width: 52px; height: 52px; border-radius: 14px; font-size: 24px; margin-bottom: 24px; background: linear-gradient(135deg,rgba(0,113,227,.12),rgba(0,113,227,.06)); border: 1px solid rgba(0,113,227,.1); display: flex; align-items: center; justify-content: center; }
h3 { font-family: var(--font-d); font-size: 22px; font-weight: 700; letter-spacing: -.5px; margin-bottom: 10px; }
p { font-size: 15px; color: var(--muted); line-height: 1.6; }

@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(4,1fr); }
  .card { grid-column: span 2; }
  .card:nth-child(4) { grid-column: span 2; }
  .card:nth-child(5) { grid-column: 2 / 4; }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .card, .card:nth-child(4), .card:nth-child(5) { grid-column: span 1; }
}
</style>
