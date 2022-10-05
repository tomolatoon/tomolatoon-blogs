import 'styles/globals.scss'
import "github-markdown-css/github-markdown.css"
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>tomolatoon</title>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
