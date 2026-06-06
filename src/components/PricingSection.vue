<template>
  <section id="pricing">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('pricing.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('pricing.title') }}</h2>
        <p class="section-sub" v-reveal="200">{{ t('pricing.sub') }}</p>
      </div>
      <div class="grid" v-reveal="200">
        <div v-for="plan in plans" :key="plan.name" class="card" :class="{ featured: plan.featured }">
          <div class="plan-tag">{{ plan.tag }}</div>
          <div class="plan-name">{{ plan.name }}</div>
          <div class="plan-price">{{ plan.price }}</div>
          <div class="plan-per">{{ plan.per }}</div>
          <ul class="features">
            <li v-for="f in plan.features" :key="f">{{ f }}</li>
          </ul>
          <button class="btn" :class="{ 'btn-featured': plan.featured }" @click="openModal">
            {{ t('pricing.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useModal } from '../composables/useModal.js'

const { t, tm } = useI18n()
const { openModal } = useModal()
const plans = computed(() => tm('pricing.plans'))
</script>

<style scoped>
section { background: var(--bg); }
.grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; align-items: start; }
.card { border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 36px 32px; transition: transform .3s, box-shadow .3s; }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.card.featured { background: var(--text); border-color: var(--text); box-shadow: var(--shadow-lg); transform: scale(1.03); }
.card.featured:hover { transform: scale(1.03) translateY(-4px); }
.plan-tag { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
.featured .plan-tag { color: rgba(255,255,255,.6); }
.plan-name { font-family: var(--font-d); font-size: 24px; font-weight: 700; margin-bottom: 20px; }
.featured .plan-name { color: #fff; }
.plan-price { font-family: var(--font-d); font-size: 48px; font-weight: 800; letter-spacing: -2px; line-height: 1; margin-bottom: 6px; }
.featured .plan-price { color: #fff; }
.plan-per { font-size: 14px; color: var(--muted); margin-bottom: 28px; }
.featured .plan-per { color: rgba(255,255,255,.5); }
.features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
.features li { font-size: 15px; color: var(--muted); display: flex; align-items: center; gap: 10px; }
.features li::before { content: '✓'; color: var(--accent); font-weight: 700; font-size: 13px; flex-shrink: 0; }
.featured .features li { color: rgba(255,255,255,.7); }
.featured .features li::before { color: #30d158; }
.btn { display: block; width: 100%; text-align: center; padding: 14px; border-radius: 980px; font-size: 15px; font-weight: 500; font-family: var(--font-b); cursor: pointer; border: 1.5px solid var(--border-h); color: var(--text); background: transparent; transition: background .2s, transform .2s; }
.btn:hover { background: var(--bg-2); transform: scale(.98); }
.btn-featured { background: var(--accent); border-color: transparent; color: #fff; box-shadow: 0 4px 14px rgba(0,113,227,.4); }
.btn-featured:hover { background: var(--accent-h); }
@media (max-width: 1024px) { .grid { grid-template-columns: 1fr; } .card.featured { transform: none; } }
</style>
