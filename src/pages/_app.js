import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, title = 'Enterprise Transcript' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
