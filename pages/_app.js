import Layout from '../components/layout/Layout'
import AppMeta from '../components/shared/AppMeta'
import { NotificationProvider } from "../store/notification-context"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <AppMeta />
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  )
}

export default MyApp
