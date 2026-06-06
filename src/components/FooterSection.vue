<template>
  <footer>
    <div class="inner">
      <div class="top">
        <div class="brand">
          <a href="#" class="logo">Web<span>Studio</span></a>
          <p>Разрабатываем сайты, которые решают бизнес-задачи. Быстро, качественно, с гарантией результата.</p>
        </div>
        <div v-for="col in columns" :key="col.title" class="col">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <p>© 2026 WebStudio. Все права защищены.</p>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: 'Услуги',
    links: [
      { label: 'Лендинги',            href: '#services' },
      { label: 'Корпоративные сайты', href: '#services' },
      { label: 'Интернет-магазины',   href: '#services' },
      { label: 'Редизайн',            href: '#services' },
      { label: 'SEO',                 href: '#services' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Портфолио', href: '#portfolio' },
      { label: 'Отзывы',   href: '#reviews' },
      { label: 'Цены',     href: '#pricing' },
      { label: 'FAQ',      href: '#faq' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'hello@webstudio.ru', href: 'mailto:hello@webstudio.ru' },
      { label: '+7 (000) 000-00-00', href: 'tel:+70000000000' },
      { label: 'Telegram',           href: '#' },
      { label: 'WhatsApp',           href: '#' },
    ],
  },
]
</script>

<style scoped>
footer { background: #000; color: rgba(255,255,255,.6); padding: 64px 24px 40px; }
.inner { max-width: 1200px; margin: 0 auto; }
.top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 56px; }
.logo { font-family: var(--font-d); font-weight: 700; font-size: 20px; color: #fff; text-decoration: none; letter-spacing: -.3px; }
.logo span { color: var(--accent); }
.brand p { margin-top: 14px; font-size: 14px; color: rgba(255,255,255,.4); line-height: 1.6; max-width: 280px; }
h4 { font-family: var(--font-d); font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 16px; }
ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
li a { font-size: 14px; color: rgba(255,255,255,.45); text-decoration: none; transition: color .2s; }
li a:hover { color: #fff; }
.bottom {
  border-top: 1px solid rgba(255,255,255,.08); padding-top: 28px;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
}
.bottom p { font-size: 13px; }
.bottom a { font-size: 13px; color: rgba(255,255,255,.45); text-decoration: none; transition: color .2s; }
.bottom a:hover { color: #fff; }

@media (max-width: 1024px) { .top { grid-template-columns: 1fr 1fr; gap: 32px; } }
@media (max-width: 640px)  { .top { grid-template-columns: 1fr; } }
</style>
