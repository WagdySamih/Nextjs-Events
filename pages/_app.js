import Layout from '../components/layout/Layout'
import AppMeta from '../components/shared/AppMeta'

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppMeta />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
