import MainNavbar from './navbar'
import Footer from './footer'

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>  
      <Head>
          <title></title>
      </Head>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
