<template>
  <section id="faq">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>{{ t('faq.tag') }}</span>
        <h2 class="section-title" v-reveal="100">{{ t('faq.title') }}</h2>
      </div>
      <div class="list" v-reveal="200">
        <div v-for="(item, i) in faqs" :key="i" class="item" :class="{ open: openIndex === i }">
          <button class="question" @click="toggle(i)">
            {{ item.q }}
            <span class="icon">+</span>
          </button>
          <div class="answer">
            <div class="answer-inner">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, tm } = useI18n()
const faqs = computed(() => tm('faq.items'))
const openIndex = ref(null)

function toggle(i) { openIndex.value = openIndex.value === i ? null : i }
</script>

<style scoped>
section { background: var(--bg-2); }
.list { display: flex; flex-direction: column; gap: 12px; max-width: 780px; }
.item { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.question { width: 100%; background: none; border: none; padding: 22px 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; font-family: var(--font-b); font-size: 16px; font-weight: 500; color: var(--text); cursor: pointer; text-align: left; }
.question:hover { background: var(--bg-2); }
.icon { width: 24px; height: 24px; border-radius: 50%; background: var(--bg-2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; color: var(--muted); transition: transform .3s, background .2s, color .2s; }
.open .icon { transform: rotate(45deg); background: rgba(0,113,227,.1); color: var(--accent); }
.answer { max-height: 0; overflow: hidden; transition: max-height .35s ease; }
.open .answer { max-height: 200px; }
.answer-inner { padding: 0 24px 22px; font-size: 15px; color: var(--muted); line-height: 1.7; }
</style>
