import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

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
        <link rel="icon" href="/odero.ico" />
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}
