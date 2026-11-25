import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [react(), flowbiteReact()],
  base: '/Adasah-Ass.1-React-/',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});