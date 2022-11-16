import Head from 'next/head'
import Image from 'next/image'
import CardTemplate from '../components/card-template'
import Countdown from '../components/countdown'
import CreditDebitCard from '../components/credit-debit-card'
import OderoLogo from '../components/logo'
import OrderDetails from '../components/order-details'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payment Page</title>
        <meta name="description" content="Payment Page from Odero.az after Checkout" />
        <link rel="icon" href="/odero.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <div className={styles.rowWithSpaceBetween}>
              <OderoLogo />
              <Countdown />
            </div>
            <CreditDebitCard />
          </div>

          <div className={styles.rightContainer}>
            <CardTemplate />
            <OrderDetails />
          </div>
        </div>

        <div className={styles.footer}>
          <Image src="/card-associations/visa.svg" alt="VISA" width={49.47} height={34} />
          <div style={{ width: "0.5rem" }} />
          <Image src="/card-associations/mastercard.svg" alt="MASTERCARD" width={49.47} height={34} />
        </div>
      </main>
    </div>
  )
}
