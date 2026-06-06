<template>
  <section id="faq">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>FAQ</span>
        <h2 class="section-title" v-reveal="100">Частые вопросы</h2>
      </div>
      <div class="list" v-reveal="200">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="item"
          :class="{ open: openIndex === i }"
        >
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
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  { q: 'Сколько времени займёт разработка сайта?',           a: 'Лендинг — от 5 до 7 дней. Корпоративный сайт — 10–14 дней. Интернет-магазин — от 3 до 4 недель. Сроки фиксируются в договоре.' },
  { q: 'Нужно ли мне разбираться в технологиях?',            a: 'Нет. Мы берём на себя всё техническое: хостинг, домен, настройку. Вам нужно только предоставить материалы (тексты, фото) и согласовывать этапы.' },
  { q: 'Что входит в поддержку после запуска?',              a: 'Бесплатно сопровождаем в течение 30 дней после сдачи: исправляем баги, обновляем контент по запросу. Далее — по договору поддержки от $100/мес.' },
  { q: 'Делаете ли вы сайты на конкретных платформах?',      a: 'Да. Работаем с WordPress, Tilda, Webflow и на чистом коде. Выбор платформы обсуждаем под конкретную задачу.' },
  { q: 'Как происходит оплата?',                              a: '50% предоплата при старте, 50% — после сдачи и вашего одобрения. Работаем по договору. Принимаем карты, переводы, криптовалюту.' },
]
</script>

<style scoped>
section { background: var(--bg-2); }
.list { display: flex; flex-direction: column; gap: 12px; max-width: 780px; }
.item { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.question {
  width: 100%; background: none; border: none; padding: 22px 24px;
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
  font-family: var(--font-b); font-size: 16px; font-weight: 500; color: var(--text);
  cursor: pointer; text-align: left;
}
.question:hover { background: var(--bg-2); }
.icon {
  width: 24px; height: 24px; border-radius: 50%; background: var(--bg-2); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: var(--muted); transition: transform .3s, background .2s, color .2s;
}
.open .icon { transform: rotate(45deg); background: rgba(0,113,227,.1); color: var(--accent); }
.answer { max-height: 0; overflow: hidden; transition: max-height .35s ease; }
.open .answer { max-height: 200px; }
.answer-inner { padding: 0 24px 22px; font-size: 15px; color: var(--muted); line-height: 1.7; }
</style>
