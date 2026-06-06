<template>
  <div class="stats">
    <div class="stats-inner">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stat"
        v-reveal="i * 100"
      >
        <div class="stat-num">
          <span class="count" :data-target="stat.value">0</span>{{ stat.suffix }}
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const stats = [
  { value: 60,  suffix: '+',     label: 'Проектов сдано' },
  { value: 3,   suffix: ' года', label: 'На рынке разработки' },
  { value: 98,  suffix: '%',     label: 'Клиентов довольны' },
  { value: 14,  suffix: ' дней', label: 'Средний срок сдачи' },
]

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = +el.dataset.target
      let current = 0
      const step = target / 60
      const timer = setInterval(() => {
        current += step
        if (current >= target) { el.textContent = target; clearInterval(timer) }
        else el.textContent = Math.floor(current)
      }, 1200 / 60)
      obs.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.count').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.stats {
  background: var(--bg-2); padding: 80px 24px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.stats-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4,1fr); gap: 48px; text-align: center;
}
.stat-num { font-family: var(--font-d); font-size: clamp(40px,6vw,64px); font-weight: 800; letter-spacing: -2px; }
.stat-label { font-size: 15px; color: var(--muted); margin-top: 4px; }

@media (max-width: 768px) { .stats-inner { grid-template-columns: repeat(2,1fr); gap: 32px; } }
</style>
