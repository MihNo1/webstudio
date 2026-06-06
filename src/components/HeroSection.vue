<template>
  <section class="hero" id="home">
    <div class="hero-gradient" />
    <div class="hero-tag" v-reveal>
      <span class="pulse-dot" />
      Разработка сайтов под ключ
    </div>
    <h1 v-reveal="100">Сайты, которые<br/><em>работают на вас</em></h1>
    <p class="hero-sub" v-reveal="200">
      Создаём лендинги, корпоративные сайты и интернет-магазины<br/>с фокусом на конверсию и скорость.
    </p>
    <div class="hero-actions" v-reveal="300">
      <button class="btn-primary" @click="openModal">Оставить заявку</button>
      <a href="#portfolio" class="btn-secondary">Посмотреть работы</a>
    </div>
    <div class="hero-visual" v-reveal="400">
      <div class="browser-frame">
        <div class="browser-bar">
          <div class="browser-dots"><span /><span /><span /></div>
          <div class="browser-url">🔒 webstudio.ru</div>
        </div>
        <div class="browser-content">
          <div class="mock-content">
            <div class="mock-nav" />
            <div class="mock-hero-block"><span>YOUR WEBSITE</span></div>
            <div class="mock-cards">
              <div class="mock-card" /><div class="mock-card" /><div class="mock-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModal } from '../composables/useModal.js'
const { openModal } = useModal()
</script>

<style scoped>
.hero {
  min-height: 100svh; display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  text-align: center; padding: 120px 24px 80px; position: relative; overflow: hidden;
}
.hero-gradient {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,113,227,.10) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 90% 110%, rgba(191,90,242,.08) 0%, transparent 60%);
}
.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,113,227,.08); border: 1px solid rgba(0,113,227,.15);
  color: var(--accent); font-size: 13px; font-weight: 500; letter-spacing: .3px;
  padding: 6px 14px; border-radius: 980px; margin-bottom: 32px; position: relative; z-index: 1;
}
.pulse-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

h1 {
  font-family: var(--font-d); font-size: clamp(44px,8vw,96px); font-weight: 800;
  line-height: 1.02; letter-spacing: -2.5px; color: var(--text);
  max-width: 900px; margin: 0 auto 24px; position: relative; z-index: 1;
}
h1 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub {
  font-size: clamp(17px,2.5vw,22px); color: var(--muted); max-width: 600px;
  margin: 0 auto 48px; line-height: 1.55; position: relative; z-index: 1;
}
.hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

.hero-visual { position: relative; z-index: 1; margin-top: 72px; width: 100%; max-width: 960px; }
.browser-frame {
  background: #fff; border-radius: var(--radius-lg);
  box-shadow: 0 40px 120px rgba(0,0,0,.15), 0 0 0 1px rgba(0,0,0,.08);
  overflow: hidden;
}
.browser-bar {
  background: #f0f0f0; padding: 12px 16px; display: flex; align-items: center; gap: 8px;
  border-bottom: 1px solid var(--border);
}
.browser-dots { display: flex; gap: 6px; }
.browser-dots span { width: 12px; height: 12px; border-radius: 50%; }
.browser-dots span:nth-child(1) { background: #ff5f57; }
.browser-dots span:nth-child(2) { background: #febc2e; }
.browser-dots span:nth-child(3) { background: #28c840; }
.browser-url {
  flex: 1; background: #fff; border-radius: 6px; height: 28px;
  margin: 0 12px; display: flex; align-items: center; padding: 0 12px;
  font-size: 12px; color: var(--muted);
}
.browser-content {
  background: linear-gradient(145deg, #f5f5f7, #e8e8ed);
  height: 380px; display: flex; align-items: center; justify-content: center;
}
.mock-content { width: 90%; display: flex; flex-direction: column; gap: 16px; padding: 32px; }
.mock-nav { height: 44px; background: #fff; border-radius: 10px; opacity: .7; }
.mock-hero-block {
  height: 140px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, rgba(0,113,227,.15), rgba(191,90,242,.12));
}
.mock-hero-block span { font-family: var(--font-d); font-weight: 700; font-size: 22px; color: var(--text); opacity: .4; letter-spacing: -1px; }
.mock-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
.mock-card { height: 64px; background: #fff; border-radius: 10px; opacity: .6; }

@media (max-width: 768px) {
  .browser-content { height: 220px; }
  .mock-hero-block { height: 80px; }
  .mock-hero-block span { font-size: 14px; }
  .mock-card { height: 40px; }
}
</style>
