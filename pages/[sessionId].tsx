import Head from 'next/head'
import styles from '../styles/Home.module.css'

// custom components
import Checkout from '../components/checkout-component'
import Payment from '../components/payment-component'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Page404 from './_error'
import { CheckoutSession } from '../models/checkout-session'
import { useMerchant } from '../network/swr'
import { CONNECTION, HOST, PORT } from '../constants'
import ResponseModal from '../components/response-modal'
import { useState } from 'react'
import { CheckoutSkeleton } from '../components/loading'

type CheckoutData = {
  success?: CheckoutSession
  error?: string
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if (data.error) return <Page404 />

  const { merchant, isLoading, isError } = useMerchant!(data.success!.public_key)
  // show response modal only if payment response is returned
  const [responseModal, setResponseModal] = useState!(false)
  const [success, setSuccess] = useState!(false)

  if (isError) return <Page404 />

  if (isLoading) return <CheckoutSkeleton />

  return (
    merchant && <div>
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
          <Payment items={data.success!.items} sessionId={data.success!.id} setPaymentResponse={setResponseModal} setSuccess={setSuccess} />
        </div>
        {responseModal && <ResponseModal id={data.success!.id} successUrl={data.success!.success_url} success={success} setResponseModal={setResponseModal} />}
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: CheckoutData }> = async (context) => {
  const sessionId = context.params?.sessionId
  const res = await fetch(`${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${sessionId}`)
  const data: CheckoutData = await res.json()

  return {
    props: {
      data,
    },
  }
}