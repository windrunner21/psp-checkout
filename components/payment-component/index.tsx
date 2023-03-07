import styles from './Payment.module.css'
import PaymentProps from './interface';
import OderoLogo from '../logo';
import CardForm from '../card-form';
import Button from '../button';
import { useState, useRef, useEffect } from 'react';
import { getCardBrand, isValidEmailAddress } from '../../controllers/validators';
import { completeCheckoutSession } from '../../network/payment';
import { PaymentDetails } from '../../models/payment-details';
import { Card } from '../../models/card';
import { formatFullName } from '../../controllers/formatting';
import { collectCardHolderBrowserInfo } from '../../network/banks/atb/network';

const Payment = (props: PaymentProps) => {

    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const [cardNumberHasError, setCardNumberHasError] = useState(false)
    const [monthHasError, setMonthHasError] = useState(false)
    const [yearHasError, setYearHasError] = useState(false)
    const [cvcHasError, setCVCHasError] = useState(false)
    const [cardHolderNameHasError, setCardHolderNameHasError] = useState(false)
    const [emailHasError, setEmailHasError] = useState(false)

    const [loading, setLoading] = useState(false)

    function doesFormHasErrors() {
        const formIsEmpty = props.cardNumber == "" || props.month == "" || props.year == "" || props.cvc == "" || props.cardHolderName == "" || props.email == ""
        const formHasErrors = cardNumberHasError || monthHasError || yearHasError || cvcHasError || cardHolderNameHasError || emailHasError
        return formIsEmpty || formHasErrors
    }

    async function sendCompleteCheckoutSessionRequest() {
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

        setLoading(true)
        const response = await completeCheckoutSession(props.sessionId, paymentDetails)
        setLoading(false)

        if (response.success) {
            if (response.success.is3DSecure) {
                props.setThreeDSecureModal(true)
                if (response.success.is3DSecureV2) {
                    if (response.success.cardHolderBrowserCheck) {
                        const cardHolderBrowserInfoHTML = await collectCardHolderBrowserInfo(response.success.cardHolderBrowserCheck)
                        props.setThreeDSecureCardHolderBrowserInfo(cardHolderBrowserInfoHTML)
                    }
                } else {
                }
            } else {
                props.setPaymentResponse(true)
                props.setSuccess(true)
            }
        } else if (response.warning) {
            props.setPaymentResponse(true)
        } else {
            window.location.href = window.location.pathname;
        }
    }

    return (
        <div className={styles.main}>
            {/* white content itself */}
            <div className={styles.column}>
                <div className={styles.content}>

                    {/* logo */}
                    <OderoLogo />

                    {/* card form */}
                    <CardForm
                        cardNumber={props.cardNumber}
                        setCardNumber={props.setCardNumber}

                        month={props.month}
                        setMonth={props.setMonth}

                        year={props.year}
                        setYear={props.setYear}

                        cvc={props.cvc}
                        setCVC={props.setCVC}

                        cardHolderName={props.cardHolderName}
                        setCardHolderName={props.setCardHolderName}

                        cardNumberHasError={cardNumberHasError}
                        monthHasError={monthHasError}
                        yearHasError={yearHasError}
                        cvcHasError={cvcHasError}
                        cardHolderNameHasError={cardHolderNameHasError}

                        setCardNumberHasError={setCardNumberHasError}
                        setMonthHasError={setMonthHasError}
                        setYearHasError={setYearHasError}
                        setCVCHasError={setCVCHasError}
                        setCardHolderNameHasError={setCardHolderNameHasError}

                        emailRef={emailRef}
                    />

                    {/* horizontal divider */}
                    <div className={styles.row}>
                        <div className={styles.hr} />
                        <div style={{ width: "1rem" }} />
                        <span className={styles.sectionLabel}>Receive electronic receipt</span>
                        <div style={{ width: "1rem" }} />
                        <div className={styles.hr} />
                    </div>

                    <div className={styles.form}>
                        {/* email */}
                        <span className={styles.label}>Email</span>
                        <input
                            className={`${styles.input} ${emailHasError && styles.inputError}`}
                            style={{ borderRadius: '0.4rem' }}
                            placeholder="Enter your email"
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && false) {
                                    phoneRef!.current!.focus();
                                }
                            }}
                            onBlur={(e) => {
                                setEmailHasError(!isValidEmailAddress(e.target))
                            }}
                            ref={emailRef}
                        />

                        {/* phone number if needed */}
                        {false && <>
                            <span className={styles.label}>Phone Number</span>
                            <input
                                className={styles.input}
                                style={{ borderRadius: '0.4rem' }}
                                placeholder="Enter your phone number"
                                value={props.phone}
                                onChange={(e) => props.setPhone(e.target.value)}
                                ref={phoneRef}
                            />
                        </>
                        }
                    </div>

                    {/* pay button*/}
                    <div style={{ marginTop: '2rem' }}>
                        <Button
                            label='Pay'
                            width='100%'
                            height='45px'
                            color='white'
                            backgroundColor='var(--black)'
                            fontSize='1.2rem'
                            radius='0.4rem'

                            disabled={doesFormHasErrors()}
                            loading={loading}

                            onClick={sendCompleteCheckoutSessionRequest}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment