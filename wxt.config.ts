import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [vue(), unocss()],
  }),
  manifest: {
    permissions: ['storage'],
  },
})
