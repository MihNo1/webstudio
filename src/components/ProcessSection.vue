<template>
  <section id="process">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('process.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('process.title') }}</h2>
        <p class="section-sub" v-reveal="200">{{ t('process.sub') }}</p>
      </div>
      <div class="steps">
        <div v-for="(step, i) in steps" :key="i" class="step" v-reveal="i * 120">
          <div class="step-num">{{ i + 1 }}</div>
          <div class="step-body">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
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
const steps = computed(() => tm('process.steps'))
</script>

<style scoped>
section { background: var(--bg-2); }
.steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 40px; position: relative; }
.steps::before { content: ''; position: absolute; top: 32px; left: calc(16.66% + 20px); right: calc(16.66% + 20px); height: 1px; background: linear-gradient(90deg,transparent,var(--border-h),transparent); }
.step { text-align: center; }
.step-num { width: 64px; height: 64px; border-radius: 50%; background: var(--bg); border: 1.5px solid var(--border-h); display: flex; align-items: center; justify-content: center; font-family: var(--font-d); font-size: 24px; font-weight: 700; color: var(--accent); margin: 0 auto 28px; box-shadow: var(--shadow-sm); }
h3 { font-family: var(--font-d); font-size: 22px; font-weight: 700; letter-spacing: -.4px; margin-bottom: 10px; }
p { font-size: 15px; color: var(--muted); line-height: 1.6; max-width: 240px; margin: 0 auto; }

@media (max-width: 768px) {
  .steps { grid-template-columns: 1fr; gap: 32px; }
  .steps::before { display: none; }
  .step { text-align: left; display: flex; gap: 20px; align-items: flex-start; }
  .step-num { margin: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 18px; }
  p { max-width: none; }
}
</style>
