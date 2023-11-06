import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth:{
        app: "700px"
      },
      colors: {
        // Evandro: '#333'
      }
    },
  },
  plugins: [],
}
export default config
