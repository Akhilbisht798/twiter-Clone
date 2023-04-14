import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'
import LoginModal from '@/components/modal/LoginModal'
import RegisterModal from '@/components/modal/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
   )
 
}
