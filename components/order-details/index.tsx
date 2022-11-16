import Image from "next/image"
import styles from "../order-details/OrderDetails.module.css"
import OrderDetailsProps from "./interface"

const OrderDetails = (props: OrderDetailsProps) => {
    return (
        <div className={styles.column}>
            <div className={styles.row}>
                <span className={styles.title}>Company:</span>
                <div className={styles.row}>
                    <Image src="/test-logos/netflix.svg" alt="Company Logo" width={25} height={25} />
                    <div style={{ width: "0.5rem" }} />
                    <span className={styles.value}>Netflix</span>
                </div>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Order Number:</span>
                <span className={styles.value}>#37392</span>
            </div>
            <div className={styles.receipt}>
                <div className={styles.receiptColumn}>
                    <span className={styles.title} style={{ marginTop: "1rem" }}>You have to pay</span>
                    <span className={styles.price}>102.10 AZN</span>
                </div>
                <picture className={styles.logo}>
                    <source srcSet="/mui-icons/receipt-dark.svg" media="(prefers-color-scheme: dark)" />
                    <img src="/mui-icons/receipt.svg" alt="long receipt material icon" width={40} height={40} />
                </picture>
            </div>
        </div>
    )
}

export default OrderDetails