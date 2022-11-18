import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

// custom components
import CardTemplate from '../components/card-template'
import Countdown from '../components/countdown'
import CreditDebitCard from '../components/credit-debit-card'
import OderoLogo from '../components/logo'
import OrderDetails from '../components/order-details'
import { showExpireDate, showLatest4Digits } from '../constants'

export default function Home() {

  const [fullName, setFullName] = React.useState("")
  const [cardNumber, setCardNumber] = React.useState("")
  const [expireMonth, setExpireMonth] = React.useState("")
  const [expireYear, setExpireYear] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [cardAssociation, setCardAssociation] = React.useState("")

  return (
    <div className={styles.container}>
      <Head>
        <title>Pay | Odero</title>
        <meta name="description" content="Payment Page from Odero.az after Checkout" />
        <meta name="keywords" content="Payment Page, Amex, Visa, Mastercard" />
        <meta name="theme-color" content="#F0FAED" media="(prefers-color-scheme: light)" />
        {/* <meta name="theme-color" content="#222222" media="(prefers-color-scheme: dark)" /> */}
        <link rel="icon" href="/odero.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <div className={styles.rowWithSpaceBetween}>
              <OderoLogo />
              <Countdown />
            </div>
            <CreditDebitCard
              expireMonth={expireMonth}
              expireYear={expireYear}
              setFullName={setFullName}
              setCardNumber={setCardNumber}
              setExpireMonth={setExpireMonth}
              setExpireYear={setExpireYear}
              setPassword={setPassword}
              setCardAssociation={setCardAssociation}
            />
          </div>

          <div className={styles.rightContainer}>
            <CardTemplate name={fullName} last4={showLatest4Digits(cardNumber.length, cardNumber)} expire={showExpireDate(expireMonth, expireYear)} association={cardAssociation} />
            <OrderDetails />
          </div>
        </div>

        <div className={styles.footer}>
          <Image src="/card-associations/visa.svg" alt="VISA" width={49.47} height={34} />
          <div style={{ width: "0.5rem" }} />
          <Image src="/card-associations/mastercard.svg" alt="MASTERCARD" width={49.47} height={34} />
          <div style={{ width: "0.5rem" }} />
          <Image src="/card-associations/amex.svg" alt="AMEX" width={45.5} height={45.5} />
        </div>
      </main>
    </div>
  )
}
