import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './index.module.css' // CSS'i bu şekilde ayıracağız

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <Header title="Dowlander" />

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.downloadSection}>
          <h2 className={styles.downloadText}>Download</h2>

          <a href="/download.zip" className={styles.downloadButton}>
            Download
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
