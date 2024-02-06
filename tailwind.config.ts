import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fotFamily: {
       'sans': ['Open Sans', 'sans-serif', 'Flow Circular', 'system-ui'],
       'cicualar': ['Flow Circular', 'system-ui']
      },
      colors: {
        Hopedes: '#222222',
        DivHospedes: '#F7F7F7',
        border: '#E8E8E8'
      }
    },
  },
  plugins: [],
}
export default config
