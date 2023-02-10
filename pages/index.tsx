import Head from 'next/head'
import styles from '../styles/Home.module.css'

// custom components
import Checkout from '../components/checkout-component'
import Payment from '../components/payment-component'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout | Odero</title>
        <meta name="description" content="Odero Checkout Page" />
        <meta name="keywords" content="Checkout Page, Payment Page, Pay by link, Odero, Odero Azerbaijan, Amex, Visa, Mastercard" />
        <link rel="icon" href="/odero.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <Checkout />
        </div>
        <div className={styles.rightContainer}>
          <Payment />
        </div>
      </main>
    </div>
  )
}
