import "tailwindcss/tailwind.css";
import '../styles/fonts.css';
import '../styles/icons.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
