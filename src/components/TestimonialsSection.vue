<template>
  <section id="reviews">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('testimonials.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('testimonials.title') }}</h2>
      </div>
      <div class="grid">
        <div v-for="(item, i) in testimonials" :key="i" class="card" v-reveal="i * 100">
          <div class="stars">★★★★★</div>
          <p class="text">{{ item.text }}</p>
          <div class="author">
            <div class="avatar">{{ item.initials }}</div>
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="role">{{ item.role }}</div>
            </div>
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
const testimonials = computed(() => tm('testimonials.items'))
</script>

<style scoped>
section { background: var(--bg-2); }
.grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; transition: transform .3s, box-shadow .3s; }
.card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.stars { color: #ff9500; font-size: 14px; margin-bottom: 16px; letter-spacing: 2px; }
.text { font-size: 15px; line-height: 1.7; color: var(--text); margin-bottom: 24px; }
.author { display: flex; align-items: center; gap: 12px; }
.avatar { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; background: linear-gradient(135deg,var(--accent),var(--accent-2)); display: flex; align-items: center; justify-content: center; font-family: var(--font-d); font-size: 15px; font-weight: 700; color: #fff; }
.name { font-weight: 600; font-size: 15px; }
.role { font-size: 13px; color: var(--muted); }

@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
