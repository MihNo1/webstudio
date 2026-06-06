<template>
  <Teleport to="body">
    <div class="overlay" :class="{ open: isOpen }" @click.self="closeModal">
      <div class="modal">
        <button class="close" @click="closeModal">✕</button>

        <template v-if="!success">
          <h2>{{ t('modal.title') }}</h2>
          <p>{{ t('modal.sub') }}</p>
          <form @submit.prevent="submit">
            <div class="field">
              <label>{{ t('modal.name.label') }}</label>
              <input v-model="form.name" type="text" :placeholder="t('modal.name.placeholder')" required />
            </div>
            <div class="field">
              <label>{{ t('modal.contact.label') }}</label>
              <input v-model="form.contact" type="text" :placeholder="t('modal.contact.placeholder')" required />
            </div>
            <div class="field">
              <label>{{ t('modal.type.label') }}</label>
              <select v-model="form.type">
                <option value="">{{ t('modal.type.placeholder') }}</option>
                <option v-for="opt in typeOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="field">
              <label>{{ t('modal.comment.label') }}</label>
              <textarea v-model="form.comment" :placeholder="t('modal.comment.placeholder')" />
            </div>
            <button type="submit" class="submit">{{ t('modal.submit') }}</button>
          </form>
        </template>

        <div v-else class="success">
          <div class="success-icon">🎉</div>
          <h3>{{ t('modal.success.h3') }}</h3>
          <p>{{ t('modal.success.p') }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useModal } from '../composables/useModal.js'
import { useI18n } from '../i18n/index.js'

const { isOpen, closeModal } = useModal()
const { t, tm } = useI18n()

const success = ref(false)
const form = reactive({ name: '', contact: '', type: '', comment: '' })
const typeOptions = computed(() => tm('modal.type.options'))

function submit() {
  success.value = true
  setTimeout(() => {
    closeModal()
    setTimeout(() => { success.value = false; Object.assign(form, { name: '', contact: '', type: '', comment: '' }) }, 400)
  }, 2800)
}

function onKeydown(e) { if (e.key === 'Escape') closeModal() }
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,.5); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 24px; opacity: 0; pointer-events: none; transition: opacity .3s; }
.overlay.open { opacity: 1; pointer-events: all; }
.modal { background: #fff; border-radius: var(--radius-xl); padding: 48px; max-width: 480px; width: 100%; position: relative; box-shadow: var(--shadow-lg); transform: scale(.95) translateY(20px); transition: transform .3s; }
.overlay.open .modal { transform: scale(1) translateY(0); }
.close { position: absolute; top: 20px; right: 20px; width: 32px; height: 32px; border-radius: 50%; background: var(--bg-2); border: none; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--muted); transition: background .2s; }
.close:hover { background: var(--bg-3); }
h2 { font-family: var(--font-d); font-size: 28px; font-weight: 800; letter-spacing: -.8px; margin-bottom: 8px; }
p { font-size: 15px; color: var(--muted); margin-bottom: 28px; }
.field { margin-bottom: 18px; }
.field label { display: block; font-size: 13px; font-weight: 500; color: var(--text); margin-bottom: 6px; }
.field input, .field textarea, .field select { width: 100%; padding: 13px 16px; border: 1.5px solid var(--border-h); border-radius: 10px; font-family: var(--font-b); font-size: 15px; color: var(--text); background: var(--bg-2); outline: none; transition: border-color .2s, box-shadow .2s; -webkit-appearance: none; appearance: none; }
.field input:focus, .field textarea:focus, .field select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0,113,227,.12); background: #fff; }
.field textarea { resize: vertical; min-height: 90px; }
.submit { width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none; border-radius: 980px; font-size: 16px; font-weight: 500; font-family: var(--font-b); cursor: pointer; transition: background .2s, transform .2s; box-shadow: 0 4px 14px rgba(0,113,227,.35); }
.submit:hover { background: var(--accent-h); transform: scale(.99); }
.success { text-align: center; padding: 20px 0; }
.success-icon { font-size: 52px; margin-bottom: 16px; }
.success h3 { font-family: var(--font-d); font-size: 24px; font-weight: 700; }
.success p { margin-top: 8px; margin-bottom: 0; }
@media (max-width: 480px) { .modal { padding: 32px 24px; } }
</style>
