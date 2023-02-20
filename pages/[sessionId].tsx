import Head from 'next/head'
import styles from '../styles/Home.module.css'

// custom components
import Checkout from '../components/checkout-component'
import Payment from '../components/payment-component'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Page404 from './_error'
import { CheckoutSession } from '../models/checkout-session'
import { useMerchant } from '../network/swr'

type CheckoutData = {
  success?: CheckoutSession
  error?: string
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if (data.error) return <Page404 />

  const { merchant, isLoading, isError } = useMerchant!(data.success!.publicKey)

  if (isError) return <Page404 />

  if (isLoading) return <></>

  return (
    merchant && <div className={styles.container}>
      <Head>
        <title>Checkout | Odero</title>
        <meta name="description" content="Odero Checkout Page" />
        <meta name="keywords" content="Checkout Page, Payment Page, Pay by link, Odero, Odero Azerbaijan, Amex, Visa, Mastercard" />
        <link rel="icon" href="/odero.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <Checkout items={data.success!.items} merchant={merchant.success} />
        </div>
        <div className={styles.rightContainer}>
          <Payment />
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: CheckoutData }> = async (context) => {
  const sessionId = context.params?.sessionId
  const res = await fetch(`http://localhost:2106/v1/checkout/session/${sessionId}`)
  const data: CheckoutData = await res.json()

  return {
    props: {
      data,
    },
  }
}