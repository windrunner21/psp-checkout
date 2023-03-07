import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../components/button";
import { formatFullName } from "../controllers/formatting";
import { getCardBrand } from "../controllers/validators";
import { BankDetails } from "../models/bank-response";
import { Card } from "../models/card";
import { PaymentStatus } from "../models/enums/payment-status";
import { ThreeDSecureStatus } from "../models/enums/three-d-secure-status";
import { PaymentDetails } from "../models/payment-details";
import { checkCompleted3DSecureCheckoutSession, complete3DSecureCheckoutSession } from "../network/payment";
import { useCheck3DSecure } from "../network/swr";
import styles from "../styles/3DSecure.module.css";

interface ThreeDSecureProps {
  sessionId: string;
  livemode: boolean;

  totalPrice: number;
  setTotalPrice: (params: any) => void;

  cardNumber: string;
  setCardNumber: (params: any) => void;
  month: string;
  setMonth: (params: any) => void;
  year: string;
  setYear: (params: any) => void;
  cvc: string;
  setCVC: (params: any) => void;
  cardHolderName: string;
  setCardHolderName: (params: any) => void;
  email: string;
  setEmail: (params: any) => void;
  phone: string;
  setPhone: (params: any) => void;

  setPaymentResponse: (params: any) => void;
  setSuccess: (params: any) => void;

  setThreeDSecureModal: (params: any) => void;

  setThreeDSecureCardHolderBrowserInfo: (params: any) => void;
  threeDSecureCardHolderBrowserInfo: string
  threeDSecureUrl: string
}

const ThreeDSecure = (props: ThreeDSecureProps) => {
  const [loading, setLoading] = useState(false)
  const [shouldListen, setShouldListen] = useState(true)
  const { data, isLoading } = useCheck3DSecure(props.sessionId, props.threeDSecureCardHolderBrowserInfo != "")
  const threeDSecureForm = useRef<HTMLFormElement>(null);

  async function sendCheckCompleted3DSecureCheckoutSessionRequest() {
    const response = await checkCompleted3DSecureCheckoutSession(data.success.bankOrderId)

    if (response.success) {
      const bankDetails = {} as BankDetails
      switch (response.success.orderStatus) {
        case 2:
          setShouldListen(false)
          bankDetails.rrn = response.success.authCode
          bankDetails.approval_code = response.success.approvalCode
          sendComplete3DSecureCheckoutSessionRequest(ThreeDSecureStatus.succeeded, bankDetails)
          break;
        case 6:
          setShouldListen(false)
          sendComplete3DSecureCheckoutSessionRequest(ThreeDSecureStatus.failed, bankDetails)
          break;
        case 7:
          setShouldListen(false)
          sendComplete3DSecureCheckoutSessionRequest(ThreeDSecureStatus.failed, bankDetails)
          break;
        default:
          break;
      }
    }
  }

  async function sendComplete3DSecureCheckoutSessionRequest(threeDSecureStatus: ThreeDSecureStatus, bankDetails: BankDetails) {
    const card = {
      number: props.cardNumber,
      exp_month: props.month,
      exp_year: props.year,
      cvc: props.cvc,
      name: formatFullName(props.cardHolderName),
      brand: getCardBrand(props.cardNumber)
    } as Card

    const paymentDetails = {
      card: card,
      email: props.email,
      price: props.totalPrice
    } as PaymentDetails

    bankDetails.payment_status = threeDSecureStatus == ThreeDSecureStatus.succeeded ? PaymentStatus.paid : PaymentStatus.unpaid

    setLoading(true)
    const response = await complete3DSecureCheckoutSession(props.sessionId, paymentDetails, bankDetails, threeDSecureStatus)
    setLoading(false)
    props.setThreeDSecureModal(false)

    if (response.success) {
      props.setPaymentResponse(true)
      props.setSuccess(true)
    } else if (response.warning) {
      props.setPaymentResponse(true)
    } else {
      window.location.href = window.location.pathname;
    }
  }

  useEffect(() => {
    if (data?.success?.acsUrl) {
      threeDSecureForm.current?.submit();
      var refreshIntervalId = setInterval(sendCheckCompleted3DSecureCheckoutSessionRequest, 1500);
      return () => clearInterval(refreshIntervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, shouldListen]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* cancel 3d secure button */}
        <div className={styles.cancel}>
          <div className={styles.circle} onClick={() => {
            props.setThreeDSecureModal(false);
            props.setThreeDSecureCardHolderBrowserInfo("")
          }}>
            <Image src="/mui-icons/close.svg" alt="back" width={20} height={20} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>

        {/* fake 3d secure page */}
        {props.livemode &&
          <div>
            {/* title */}
            <span className={styles.title}>Fake 3D Secure 2</span>
            <div style={{ height: "1rem" }} />
            {/* explanation for fake 3d secure */}
            <span className={styles.subtitle}><b>Live environment</b> will ask end-users to authorize transaction using <b>push notification</b>, <b>one time passcode</b> or <b>any another method chosen by their bank</b>.</span>
            <div style={{ height: "3rem" }} />
            {/* simulate either fail or success on 3d secure operation */}
            <div className={`${styles.row} ${styles.spaceBetween}`}>
              <Button
                label='Fail'
                width="140px"
                height='40px'
                color='white'
                backgroundColor='var(--text)'
                fontSize='1.1rem'
                radius='0.4rem'

                onClick={() => sendComplete3DSecureCheckoutSessionRequest(ThreeDSecureStatus.failed, {} as BankDetails)}
                loading={loading}
              />
              <Button
                label='Success'
                width="140px"
                height='40px'
                color='white'
                backgroundColor='var(--primary)'
                fontSize='1.1rem'
                radius='0.4rem'

                onClick={() => sendComplete3DSecureCheckoutSessionRequest(ThreeDSecureStatus.succeeded, {} as BankDetails)}
                loading={loading}
              />
            </div>
            <div style={{ height: "2rem" }} />
            {/* footer */}
            <span className={styles.caption}>Powered by Odero ©</span>
          </div>}

        {/* 3d secure page */}
        {!props.livemode &&
          <div>
            {/* title */}
            <span className={styles.title}>{(isLoading || !data?.success?.acsUrl) && 'Waiting for'} 3D Secure Page</span>
            <div style={{ height: "1rem" }} />

            {/* insert response for the 3d secure page */}
            <iframe hidden srcDoc={props.threeDSecureCardHolderBrowserInfo} />

            {(isLoading || !data?.success?.acsUrl) && <div className={styles.loaderContainer}>
              <span className={styles.loader} />
            </div>}

            {data?.success?.acsUrl &&
              <>
                <form ref={threeDSecureForm} hidden method="post" action={data.success.acsUrl} target="_iframe">
                  <input hidden type="text" name="creq" value={data.success.cReq} />
                </form>
                <iframe className={styles.iframe} name="_iframe" />
              </>

            }

            <div style={{ height: "2rem" }} />
            {/* footer */}
            <span className={styles.caption}>Powered by Odero ©</span>
          </div>
        }
      </div>
    </div >
  );
};

export default ThreeDSecure;

