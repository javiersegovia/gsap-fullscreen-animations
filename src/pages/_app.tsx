import '@styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '@components/Layout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <title>$DESP - DeSports Network</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
