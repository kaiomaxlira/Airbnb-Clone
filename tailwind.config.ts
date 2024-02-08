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
        Hospedes: '#222222',
        DivHospedes: '#F7F7F7',
        border: '#E8E8E8',
        textmodal: '#737373',
        buttonmodal: '#222222',
        buttonhover: '#000000',
      }
    },
  },
  plugins: [],
}
export default config
