export default {
  mounted(el, binding) {
    const delay = binding.value || 0
    Object.assign(el.style, {
      opacity: '0',
      transform: 'translateY(28px)',
      transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
    })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.12 })
    obs.observe(el)
  },
}
