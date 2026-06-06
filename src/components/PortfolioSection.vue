<template>
  <section id="portfolio">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('portfolio.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('portfolio.title') }}</h2>
        <p class="section-sub" v-reveal="200">{{ t('portfolio.sub') }}</p>
      </div>
      <div class="grid">
        <div v-for="(p, i) in projects" :key="i" class="card" :style="{ background: p.bg }" v-reveal="i * 100">
          <span class="placeholder">PROJECT</span>
          <div class="label">
            <h4>{{ p.title }}</h4>
            <span>{{ p.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, tm } = useI18n()
const projects = computed(() => tm('portfolio.items'))
</script>

<style scoped>
section { background: var(--bg); }
.grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
.card { border-radius: var(--radius-lg); overflow: hidden; position: relative; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); transition: transform .3s, box-shadow .3s; cursor: pointer; }
.card:hover { transform: scale(1.02); box-shadow: var(--shadow-lg); }
.placeholder { font-family: var(--font-d); font-size: 42px; font-weight: 800; opacity: .07; color: #fff; letter-spacing: -2px; }
.label { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,.12); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.15); border-radius: 10px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; }
.label h4 { color: #fff; font-size: 16px; font-weight: 600; font-family: var(--font-d); }
.label span { color: rgba(255,255,255,.6); font-size: 13px; }

@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
</style>
