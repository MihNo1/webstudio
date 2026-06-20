<template>
  <section id="portfolio">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('portfolio.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('portfolio.title') }}</h2>
        <p class="section-sub" v-reveal="200">{{ t('portfolio.sub') }}</p>
      </div>
      <div class="grid">
        <div
          v-for="(p, i) in projects"
          :key="i"
          class="card"
          :class="{ 'card--live': p.iframeSrc }"
          :style="p.iframeSrc ? {} : { background: p.bg }"
          v-reveal="i * 100"
        >
          <!-- Обычная карточка -->
          <template v-if="!p.iframeSrc">
            <span class="placeholder">PROJECT</span>
            <div class="label">
              <h4>{{ p.title }}</h4>
              <span>{{ p.category }}</span>
            </div>
          </template>

          <!-- Карточка с живым превью -->
          <template v-else>
            <div class="live-preview">
              <iframe
                :src="p.iframeSrc"
                class="live-iframe"
                scrolling="yes"
                frameborder="0"
                :title="p.title"
              ></iframe>
            </div>
            <div class="label label--dark">
              <h4>{{ p.title }}</h4>
              <span>{{ p.category }}</span>
            </div>
            <div class="hover-hint">↕ Hover to explore</div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, tm } = useI18n()
const iframeSrc = {
  'HoReCa':     '/restaurant-menu/index.html',
  'Healthcare':  '/zoo-clinic/index.html',
  'Medicină':    '/zoo-clinic/index.html',
  'Медицина':    '/zoo-clinic/index.html',
  'B2B':         '/construction/index.html',
}

const projects = computed(() => {
  return tm('portfolio.items').map(p => ({
    ...p,
    iframeSrc: iframeSrc[p.category] || null,
  }))
})
</script>

<style scoped>
section { background: var(--bg); overflow: visible; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  overflow: visible;
}
.card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: calc(50% - 10px);
  margin: 0 auto;
}

/* ── обычная карточка ── */
.card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  transition: transform .3s, box-shadow .3s;
  cursor: pointer;
}
.card:not(.card--live):hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}

.placeholder {
  font-family: var(--font-d);
  font-size: 42px;
  font-weight: 800;
  opacity: .07;
  color: #fff;
  letter-spacing: -2px;
}

.label {
  position: absolute;
  bottom: 20px; left: 20px; right: 20px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  transition: opacity .3s;
}
.label h4   { color: #fff; font-size: 16px; font-weight: 600; font-family: var(--font-d); }
.label span { color: rgba(255,255,255,.6); font-size: 13px; }
.label--dark {
  background: rgba(20,12,4,.55);
  border-color: rgba(201,150,58,.25);
}

/* ── ресторанная карточка ── */
.card--live {
  aspect-ratio: unset;
  height: 320px;
  background: #fdf8f0;
  border-color: rgba(201,150,58,.3);
  transform-origin: center top;
  transition: height .5s cubic-bezier(.4,0,.2,1),
              transform .5s cubic-bezier(.4,0,.2,1),
              box-shadow .5s,
              border-color .3s,
              z-index 0s;
  align-items: flex-start;
  z-index: 1;
}
.card--live:hover {
  height: 680px;
  transform: scale(1.06) translateY(-12px);
  box-shadow: 0 40px 100px rgba(0,0,0,.28), 0 0 0 1px rgba(201,150,58,.4);
  border-color: rgba(201,150,58,.7);
  z-index: 50;
}
.card--live:hover .label { opacity: 0; pointer-events: none; }
.card--live:hover .hover-hint { opacity: 0; }

.live-preview {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
}
.live-iframe {
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
  transform-origin: top left;
}
.card--live:hover .live-iframe {
  pointer-events: all;
}

.hover-hint {
  position: absolute;
  top: 12px; right: 14px;
  font-size: 11px;
  letter-spacing: .5px;
  color: rgba(201,150,58,.8);
  background: rgba(253,248,240,.85);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(201,150,58,.2);
  padding: 4px 10px;
  border-radius: 20px;
  z-index: 10;
  transition: opacity .3s;
  font-family: sans-serif;
}

@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .card--live { height: 260px; }
  .card--live:hover { height: 500px; }
}
</style>
