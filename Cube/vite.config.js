import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: "esnext"
  },
  plugins: [glsl()],
  assetsInclude: "**/*.dds"
});