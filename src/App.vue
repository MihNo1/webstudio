<template>
  <NavBar />
  <main>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <ProcessSection />
    <PortfolioSection />
    <TestimonialsSection />
    <FaqSection />
    <CtaSection />
  </main>
  <FooterSection />
  <ModalForm />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import ModalForm from './components/ModalForm.vue'
</script>
