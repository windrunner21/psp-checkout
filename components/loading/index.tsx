import Footer from "../footer-component"
import styles from "./Loading.module.css"

const CheckoutSkeleton = () => {
    return (

        <main className={styles.skeletonCheckoutMain}>
            <div className={styles.skeletonCheckoutLeftContainer}>

                <div className={styles.skeletonCheckoutLeftMain}>
                    <div className={styles.skeletonCheckoutLeftColumn}>
                        <div style={{ height: "1rem" }} />
                        {/* go back to store */}
                        <div className={styles.skeletonLabel} style={{ width: '150px', height: '45px' }} />

                        <div style={{ height: "2.5rem" }} />

                        {/* title */}
                        <div className={styles.skeletonLabel} style={{ width: '300px', height: '25px' }} />

                        <div style={{ height: "0.25rem" }} />

                        {/* price */}
                        <div className={styles.skeletonLabel} style={{ width: '100px', height: '50px' }} />

                        {/* items */}
                        <div className={`${styles.skeletonCheckoutLeftColumn} ${styles.skeletonCheckoutLeftItems}`}>
                            <div className={styles.skeletonLabel} style={{ width: '100%', height: '50px' }} />
                            <div style={{ height: "2.5rem" }} />
                            <div className={styles.skeletonLabel} style={{ width: '100%', height: '50px' }} />
                        </div>

                        <Footer />
                    </div>
                </div>


            </div>
            <div className={styles.skeletonCheckoutRightContainer}>
                <div className={styles.skeletonCheckoutRightMain}>
                    {/* white content itself */}
                    <div className={styles.skeletonCheckoutRightColumn}>
                        <div className={styles.skeletonCheckoutRightContent}>

                            {/* logo */}
                            <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />

                            {/* card form */}
                            <div style={{ height: "3rem" }} />
                            <div className={styles.skeletonLabel} style={{ width: '100%', height: '30px' }} />
                            <div style={{ height: "1.5rem" }} />
                            <div className={styles.skeletonLabel} style={{ width: '100%', height: '30px' }} />
                            <div style={{ height: "1.5rem" }} />
                            <div className={styles.skeletonLabel} style={{ width: '100%', height: '30px' }} />

                            {/* horizontal divider */}
                            <div style={{ height: "2rem" }} />
                            <div className={styles.skeletonCheckoutRightRow}>
                                <div className={styles.skeletonCheckoutRightHr} />
                                <div style={{ width: "1rem" }} />
                                <div className={styles.skeletonLabel} style={{ width: '150px', height: '25px' }} />
                                <div style={{ width: "1rem" }} />
                                <div className={styles.skeletonCheckoutRightHr} />
                            </div>

                            <div className={styles.skeletonCheckoutRightForm}>
                                <div className={styles.skeletonLabel} style={{ width: '100%', height: '30px' }} />
                            </div>

                            {/* pay button*/}
                            <div style={{ marginTop: '3rem' }}>
                                <div className={styles.skeletonLabel} style={{ width: '100%', height: '45px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}

const ReceiptSkeleton = () => {
    return (
        <main className={styles.skeletonReceiptMain}>
            <div className={styles.skeletonReceiptContainer}>
                <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                <div style={{ height: "2rem" }} />
                <div className={styles.center}>
                    <div className={styles.skeletonLabel} style={{ width: '300px', height: '25px' }} />
                </div>
                <div style={{ height: "3rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonReceiptRow}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
                <div style={{ height: "3rem" }} />
                <div className={`${styles.skeletonReceiptRow} ${styles.price}`}>
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                    <div className={styles.skeletonLabel} style={{ width: '125px', height: '25px' }} />
                </div>
            </div>
        </main>
    )
}

export { CheckoutSkeleton, ReceiptSkeleton }