import { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import Head from "next/head"
import "../styles/base.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Sample API - Next JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
