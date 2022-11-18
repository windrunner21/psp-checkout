import React from "react";
import styles from "../credit-debit-card/CreditDebitCard.module.css"
import PrimaryButton from "../primary-button";
import TextField from "../text-field";
import CreditDebitCardProps from "./interface";

const CreditDebitCard = (props: CreditDebitCardProps) => {
    const [loading, setIsLoading] = React.useState(false)

    return (
        <>
            {/* CARD NUMBER */}
            <div className={styles.columnWithMargin}>
                <span className={styles.title}>Card Number</span>
                <span className={styles.subtitle}>Enter exact number of digits on your card</span>
                <div style={{ marginTop: "1rem" }}>
                    <TextField
                        autofocus={true}
                        width={100}
                        maxLength={25}
                        image={"credit-card"}
                        numerical={true}
                        validate={"credit-card"}
                        save={props.setCardNumber}
                        setAssociation={props.setCardAssociation}
                    />
                </div>
            </div>

            {/* EXPIRE DATE */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>Expire Date</span>
                    <span className={styles.subtitle}>Enter your card&apos;s expiration date</span>
                </div>
                <div className={styles.rowForExpireDate}>
                    <TextField
                        width={100}
                        maxLength={2}
                        numerical={true}
                        save={props.setExpireMonth}
                        validate={"expire-month"}
                        holding={props.expireYear}
                    />
                    <span className={styles.title} style={{ margin: "0 0.5rem" }}>/</span>
                    <TextField
                        width={100}
                        maxLength={2}
                        numerical={true}
                        save={props.setExpireYear}
                        validate={"expire-year"}
                        holding={props.expireMonth}
                    />
                </div>
            </div>

            {/* CVC/CVV */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>CVV/CVC</span>
                    <span className={styles.subtitle}>Enter your card&apos;s 3 digits on the back</span>
                </div>
                <TextField
                    width={40}
                    type="password"
                    maxLength={3}
                    numerical={true}
                    save={props.setPassword}
                    validate={"password"}
                />
            </div>

            {/* CARD HOLDER */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>Card Holder</span>
                    <span className={styles.subtitle}>Enter your full name</span>
                </div>
                <TextField width={100} validate={"full-name"} save={props.setFullName} />
            </div>

            {/* PAY BUTTON */}
            <PrimaryButton title="Pay Now" loading={loading} onClick={() => setIsLoading(true)} />
            <span className={styles.caption}>By pressing the &ldquo;Pay Now&ldquo; button you confirm the correctness of the transaction.</span>
        </>
    )
}

export default CreditDebitCard