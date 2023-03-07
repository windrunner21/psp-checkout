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
import { useEffect, useState } from 'react'
import { CheckoutSkeleton } from '../components/loading'
import ThreeDSecure from './3dsecure'

type CheckoutData = {
  success?: CheckoutSession
  error?: string
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if (data.error) return <Page404 />

  const { merchant, isLoading, isError } = useMerchant!(data.success!.public_key)

  // card and payment details
  const [totalPrice, setTotalPrice] = useState!(0)
  const [cardNumber, setCardNumber] = useState!("")
  const [month, setMonth] = useState!("")
  const [year, setYear] = useState!("")
  const [cvc, setCVC] = useState!("")
  const [cardHolderName, setCardHolderName] = useState!("")
  const [email, setEmail] = useState!("")
  const [phone, setPhone] = useState!("")

  // show 3dsecure modal only if response contains url
  const [threeDSecureModal, setThreeDSecureModal] = useState!(false)
  const [threeDSecureCardHolderBrowserInfo, setThreeDSecureCardHolderBrowserInfo] = useState!("")
  const [threeDSecureUrl, setThreeDSecureUrl] = useState!("")

  // show response modal only if payment response is returned
  const [responseModal, setResponseModal] = useState!(false)
  const [success, setSuccess] = useState!(false)

  useEffect!(() => {
    let tempPrice: number = 0
    data.success!.items.forEach(item => {
      tempPrice += item.price * item.quantity
    });

    setTotalPrice(tempPrice)
  }, [])

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
        {/* left container serves for checkout component */}
        <div className={styles.leftContainer}>
          {/* items and merchant info */}
          <Checkout items={data.success!.items} merchant={merchant.success} cancelUrl={data.success!.cancel_url} />
        </div>
        {/* right container serves for payment component */}
        <div className={styles.rightContainer}>
          {/* card details and payment details */}
          <Payment
            sessionId={data.success!.id}

            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}

            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCVC={setCVC}
            cardHolderName={cardHolderName}
            setCardHolderName={setCardHolderName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}

            setThreeDSecureModal={setThreeDSecureModal}
            setThreeDSecureCardHolderBrowserInfo={setThreeDSecureCardHolderBrowserInfo}
            setThreeDSecureUrl={setThreeDSecureUrl}

            setPaymentResponse={setResponseModal}
            setSuccess={setSuccess}
          />
        </div>
        {/* final result, whether payment is successful or has failed */}
        {responseModal && <ResponseModal id={data.success!.id} successUrl={data.success!.success_url} success={success} setResponseModal={setResponseModal} />}
        {/* 3d secure modal both fake and real component */}
        {threeDSecureModal &&
          <ThreeDSecure
            sessionId={data.success!.id}
            livemode={data.success!.livemode}

            threeDSecureCardHolderBrowserInfo={threeDSecureCardHolderBrowserInfo}
            setThreeDSecureCardHolderBrowserInfo={setThreeDSecureCardHolderBrowserInfo}
            threeDSecureUrl={threeDSecureUrl}


            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}

            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCVC={setCVC}
            cardHolderName={cardHolderName}
            setCardHolderName={setCardHolderName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}

            setThreeDSecureModal={setThreeDSecureModal}
            setPaymentResponse={setResponseModal}
            setSuccess={setSuccess}
          />}
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