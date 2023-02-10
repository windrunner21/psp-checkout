import Image from "next/image";
import styles from "./CardForm.module.css"
import CardProps from "./interface";

const CardForm = (props: CardProps) => {
    return (
        <div className={styles.main}>
            <div className={styles.column}>
                {/* card number */}
                <span className={styles.label}>Card Number</span>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder="Card number"
                        maxLength={16}
                        style={{ borderRadius: '0.4rem' }}
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
                            className={styles.input}
                            placeholder="Month"
                            maxLength={2}
                            style={{ borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', marginRight: '-1rem' }}
                        />
                        <input
                            className={styles.input}
                            placeholder="Year"
                            maxLength={2}
                            style={{ marginRight: '-1rem' }}
                        />
                    </div>
                    <input
                        className={styles.input}
                        placeholder="CVC"
                        type={'password'}
                        maxLength={3}
                        style={{ borderTopRightRadius: '0.4rem', borderBottomRightRadius: '0.4rem' }}
                    />
                </div>

                {/* card holder */}
                <span className={styles.label}>Card Holder Information</span>
                <input
                    className={styles.input}
                    placeholder="Enter your full name"
                    style={{ borderRadius: '0.4rem' }}
                />
            </div>
        </div>
    )
}

export default CardForm