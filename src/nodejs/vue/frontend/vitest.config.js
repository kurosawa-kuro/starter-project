import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/tests/setup.js'],
      css: true,
    },
  })
) 