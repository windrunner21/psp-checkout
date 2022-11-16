import styles from "../credit-debit-card/CreditDebitCard.module.css"
import PrimaryButton from "../primary-button";
import TextField from "../text-field";
import CreditDebitCardProps from "./interface";

const CreditDebitCard = (props: CreditDebitCardProps) => {
    return (
        <>

            {/* CARD NUMBER */}
            <div className={styles.columnWithMargin}>
                <span className={styles.title}>Card Number</span>
                <span className={styles.subtitle}>Enter exact number of digits on your card</span>
                <div style={{ marginTop: "1rem" }}>
                    <TextField width={100} image={"credit-card"} />
                </div>
            </div>

            {/* EXPIRE DATE */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>Expire Date</span>
                    <span className={styles.subtitle}>Enter your card's expiration date</span>
                </div>
                <div className={styles.rowForExpireDate}>
                    <TextField width={100} maxLength={2} />
                    <span className={styles.title} style={{ margin: "0 0.5rem" }}>/</span>
                    <TextField width={100} maxLength={2} />
                </div>
            </div>

            {/* CVC/CVV */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>CVV/CVC</span>
                    <span className={styles.subtitle}>Enter your card's 3 digits on the back</span>
                </div>
                <TextField width={40} type="password" maxLength={3} />
            </div>

            {/* CARD HOLDER */}
            <div className={styles.rowWithSpaceBetween}>
                <div className={styles.column}>
                    <span className={styles.title}>Card Holder</span>
                    <span className={styles.subtitle}>Enter your full name</span>
                </div>
                <TextField width={100} />
            </div>

            {/* PAY BUTTON */}
            <PrimaryButton title="Pay Now" loading={false} />
            <span className={styles.caption}>By pressing the "Pay Now" button you confirm the correctness of the transaction.</span>
        </>
    )
}

export default CreditDebitCard