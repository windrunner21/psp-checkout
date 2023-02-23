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

const Payment = (props: PaymentProps) => {

    const [cardNumber, setCardNumber] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [cvc, setCVC] = useState("")
    const [cardHolderName, setCardHolderName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const [cardNumberHasError, setCardNumberHasError] = useState(false)
    const [monthHasError, setMonthHasError] = useState(false)
    const [yearHasError, setYearHasError] = useState(false)
    const [cvcHasError, setCVCHasError] = useState(false)
    const [cardHolderNameHasError, setCardHolderNameHasError] = useState(false)
    const [emailHasError, setEmailHasError] = useState(false)

    const [loading, setLoading] = useState(false)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let tempPrice: number = 0
        props.items.forEach(item => {
            tempPrice += item.price * item.quantity
        });

        setTotalPrice(tempPrice)
    }, [props.items])

    function doesFormHasErrors() {
        const formIsEmpty = cardNumber == "" || month == "" || year == "" || cvc == "" || cardHolderName == "" || email == ""
        const formHasErrors = cardNumberHasError || monthHasError || yearHasError || cvcHasError || cardHolderNameHasError || emailHasError
        return formIsEmpty || formHasErrors
    }

    async function sendCompleteCheckoutSessionRequest() {
        const card = {
            number: cardNumber,
            exp_month: month,
            exp_year: year,
            cvc: cvc,
            name: cardHolderName,
            brand: getCardBrand(cardNumber)
        } as Card

        const paymentDetails = {
            card: card,
            email: email,
            price: totalPrice
        } as PaymentDetails

        setLoading(true)
        const response = await completeCheckoutSession(props.sessionId, paymentDetails)
        setLoading(false)

        if (response.success) {
            props.setPaymentResponse(true)
            props.setSuccess(true)
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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