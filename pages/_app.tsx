import '@/styles/globals.css'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import LoginModal from '@/components/modal/LoginModal'
import RegisterModal from '@/components/modal/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
   )
 
}
