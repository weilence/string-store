import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetIcons } from '@unocss/preset-icons'

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [
      vue(),
      unocss({
        presets: [
          presetUno(),
          presetIcons(),
        ],
      }),
      Components({
        dirs: ['components'],
        resolvers: [
          Vuetify3Resolver(),
        ],
      }),
    ],
  }),
  manifest: {
    permissions: ['storage'],
  },
})
