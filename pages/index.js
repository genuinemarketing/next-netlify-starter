import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Genuine marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GENUINE MARKETING" />
        <p className="description">
          WORK IN PROGRESS!
        </p>
      </main>

      <Footer />
    </div>
  )
}
