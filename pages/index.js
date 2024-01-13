import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Footer.module.css'


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
        <img src="/genuine-marketing.svg" alt="Genuine marketing logo" className={styles.logo} />
      </main>

      <Footer />
    </div>
  )
}
