import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";
import { isValidCardNumber, isValidCVC, isValidMonth, isValidNameSurname, isValidYear } from "../../controllers/validators";
import styles from "./CardForm.module.css"
import CardProps from "./interface";

const CardForm = (props: CardProps) => {
    const cardNumberRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    const cvcRef = useRef<HTMLInputElement>(null);
    const cardHolderNameRef = useRef<HTMLInputElement>(null);

    // explanation in comments, makes strong use of regular expressions
    function formatCardNumber(e: ChangeEvent<HTMLInputElement>) {
        //remove all the empty spaces in the input
        const inputVal = e.target.value.replace(/ /g, "");

        // get only digits
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        // if entered value has a length greater than 16 then take only the first 16 digits,
        // for example if value has been copy pasted
        if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substring(0, 16);
        }

        // Get nd array of 4 digits per an element, for example ["4242", "4242", ...]
        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedCreditCardNumber = "";
        // Join all the splits with an empty space
        if (splits) {
            spacedCreditCardNumber = splits.join(" ");
        }

        props.setCardNumber(spacedCreditCardNumber);
    }

    return (
        <div className={styles.main}>
            <div className={styles.column}>
                {/* card number */}
                <span className={styles.label}>Card Number</span>
                <div className={styles.inputContainer}>
                    <input
                        className={`${styles.input} ${props.cardNumberHasError && styles.inputError}`}
                        style={{ borderRadius: '0.4rem' }}
                        placeholder="Card number"
                        maxLength={19}
                        value={props.cardNumber}
                        onChange={(e) => {
                            formatCardNumber(e);
                            if (e.target.value.length === 19) {
                                if (isValidCardNumber(e.target)) {
                                    monthRef.current!.focus();
                                } else {
                                    props.setCardNumberHasError(!isValidCardNumber(e.target))
                                }
                            }
                        }}
                        onBlur={(e) => {
                            props.setCardNumberHasError(!isValidCardNumber(e.target))
                        }}
                        ref={cardNumberRef}
                    />
                    <div className={styles.associations}>
                        <Image src={`/card-associations/visa.svg`} alt="visa" width={34.92} height={24} />
                        <Image src={`/card-associations/mastercard.svg`} alt="visa" width={34.92} height={24} />
                    </div>
                </div>

                {/* card expire month, year and cvc */}
                <span className={styles.label}>Card Information</span>
                <div className={styles.row}>
                    <div className={styles.row}>
                        <input
                            className={`${styles.input} ${props.monthHasError && styles.inputError}`}
                            style={{ borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', marginRight: '-1rem' }}
                            placeholder="Month"
                            maxLength={2}
                            value={props.month}
                            onChange={(e) => {
                                props.setMonth((v: string) => (e.target.validity.valid ? e.target.value : v));
                                if (e.target.value.length === 2) {
                                    if (isValidMonth(e.target, props.year)) {
                                        yearRef.current!.focus();
                                    } else {
                                        props.setMonthHasError(!isValidMonth(e.target, props.year))
                                    }
                                }
                            }}
                            onBlur={(e) => {
                                props.setMonthHasError(!isValidMonth(e.target, props.year))
                            }}
                            pattern="[0-9]*"
                            ref={monthRef}
                        />
                        <input
                            className={`${styles.input} ${props.yearHasError && styles.inputError}`}
                            style={{ marginRight: '-1rem' }}
                            placeholder="Year"
                            maxLength={2}
                            value={props.year}
                            onChange={(e) => {
                                props.setYear((v: string) => (e.target.validity.valid ? e.target.value : v));
                                if (e.target.value.length === 2) {
                                    if (isValidYear(e.target, props.month)) {
                                        cvcRef.current!.focus();
                                    } else {
                                        props.setYearHasError(!isValidYear(e.target, props.month))
                                    }
                                }
                            }}
                            onBlur={(e) => {
                                props.setYearHasError(!isValidYear(e.target, props.month))
                            }}
                            pattern="[0-9]*"
                            ref={yearRef}
                        />
                    </div>
                    <input
                        className={`${styles.input} ${props.cvcHasError && styles.inputError}`}
                        style={{ borderTopRightRadius: '0.4rem', borderBottomRightRadius: '0.4rem' }}
                        placeholder="CVC"
                        type={'password'}
                        maxLength={3}
                        value={props.cvc}
                        onChange={(e) => {
                            props.setCVC((v: string) => (e.target.validity.valid ? e.target.value : v));
                            if (e.target.value.length === 3) {
                                if (isValidCVC(e.target)) {
                                    cardHolderNameRef.current!.focus();
                                } else {
                                    props.setCVCHasError(!isValidCVC(e.target))
                                }
                            }
                        }}
                        onBlur={(e) => {
                            props.setCVCHasError(!isValidCVC(e.target))
                        }}
                        pattern="[0-9]*"
                        ref={cvcRef}
                    />
                </div>

                {/* card holder */}
                <span className={styles.label}>Card Holder Information</span>
                <input
                    className={`${styles.input} ${props.cardHolderNameHasError && styles.inputError}`}
                    placeholder="Enter your full name"
                    style={{ borderRadius: '0.4rem', textTransform: 'capitalize' }}
                    value={props.cardHolderName}
                    onChange={(e) => props.setCardHolderName((v: string) => (e.target.validity.valid ? e.target.value : v))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (isValidNameSurname(e.target)) {
                                props.emailRef!.current!.focus();
                            } else {
                                props.setCardHolderNameHasError(!isValidNameSurname(e.target))
                            }
                        }
                    }}
                    onBlur={(e) => {
                        props.setCardHolderNameHasError(!isValidNameSurname(e.target))
                    }}
                    pattern="[a-zA-Z ]*"
                    ref={cardHolderNameRef}
                />
            </div>
        </div>
    )
}

export default CardForm