<template>
  <section id="services">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag" v-reveal>Услуги</span>
        <h2 class="section-title" v-reveal="100">Что мы умеем делать</h2>
        <p class="section-sub" v-reveal="200">Полный цикл разработки — от идеи до запуска и поддержки.</p>
      </div>
      <div class="grid">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          class="card"
          v-reveal="i * 80"
        >
          <div class="icon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <div class="price">{{ s.price }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '🚀', title: 'Лендинги',           desc: 'Одностраничные сайты с высокой конверсией. Быстро, красиво, с чётким призывом к действию.',             price: 'от $300' },
  { icon: '🏢', title: 'Корпоративные сайты', desc: 'Многостраничные сайты для бизнеса с каталогами, формами и интеграциями.',                               price: 'от $800' },
  { icon: '🛒', title: 'Интернет-магазины',   desc: 'Полноценные e-commerce решения с корзиной, оплатой и управлением товарами.',                             price: 'от $1500' },
  { icon: '🎨', title: 'Редизайн',            desc: 'Обновляем устаревшие сайты: современный дизайн, быстрая загрузка, мобильная версия.',                    price: 'от $400' },
  { icon: '📈', title: 'SEO-оптимизация',     desc: 'Техническое SEO, настройка метатегов, ускорение сайта — для роста в поисковиках.',                       price: 'от $200' },
  { icon: '🔧', title: 'Поддержка',           desc: 'Обновления, доработки и техническая поддержка вашего сайта на постоянной основе.',                       price: 'от $100/мес' },
]
</script>

<style scoped>
section { background: var(--bg); }
.grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.card {
  background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 36px 32px; transition: transform .3s, box-shadow .3s, border-color .3s;
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--border-h); }
.icon {
  width: 52px; height: 52px; border-radius: 14px; font-size: 24px; margin-bottom: 24px;
  background: linear-gradient(135deg, rgba(0,113,227,.12), rgba(0,113,227,.06));
  border: 1px solid rgba(0,113,227,.1);
  display: flex; align-items: center; justify-content: center;
}
h3 { font-family: var(--font-d); font-size: 22px; font-weight: 700; letter-spacing: -.5px; margin-bottom: 10px; }
p { font-size: 15px; color: var(--muted); line-height: 1.6; }
.price { margin-top: 20px; font-size: 14px; color: var(--accent); font-weight: 600; }

@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 640px)  { .grid { grid-template-columns: 1fr; } }
</style>
