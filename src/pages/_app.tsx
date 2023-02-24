import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import { GlobalStyles } from '@/styles/global'

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const montserrat = Montserrat({ subsets: ['latin'],
weight: ['300','400','500','600','700'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
  <main className={montserrat.className}>
  <GlobalStyles/>
  <Component {...pageProps} />
  </main>
  )
}
