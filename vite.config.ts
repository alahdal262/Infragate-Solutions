import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Robustly define process.env for browser compatibility
      'process.env': {
        API_KEY: JSON.stringify(env.API_KEY || ''),
        SUPABASE_URL: JSON.stringify(env.SUPABASE_URL || ''),
        SUPABASE_ANON_KEY: JSON.stringify(env.SUPABASE_ANON_KEY || ''),
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    }
  };
});