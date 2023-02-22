import styles from '../../styles/Receipt.module.css'
import Head from 'next/head'
import OderoLogo from '../../components/logo'
import { useTransaction } from '../../network/swr'
import { useRouter } from 'next/router'
import Page404 from '../_error'
import { formatDate, formatTime } from '../../controllers/formatting'
import { ReceiptSkeleton } from '../../components/loading'

const Receipt = () => {
    const router = useRouter()
    const { sessionId } = router.query
    const { transaction, isLoading, isError } = useTransaction!(sessionId as string)

    if (isError) return <Page404 />

    if (isLoading) return <ReceiptSkeleton />

    return (
        transaction && <div>
            <Head>
                <title>Receipt | Odero</title>
                <meta name="description" content="Odero 404 Page" />
                <meta name="keywords" content="Receipt Page, Checkout Page, Payment Page, Pay by link, Odero, Odero Azerbaijan, Visa, Mastercard" />
                <link rel="icon" href="/odero.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.container}>
                    <OderoLogo />
                    <div style={{ height: "2rem" }} />
                    <span className={styles.title}>Successfull Payment Receipt</span>
                    <div style={{ height: "3rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Merchant</span>
                        <span className={styles.value}>{transaction.success.merchant}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Date</span>
                        <span className={styles.value}>{formatDate(transaction.success.date)}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Time</span>
                        <span className={styles.value}>{formatTime(transaction.success.date)}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Transaction ID</span>
                        <span className={styles.value}>{transaction.success.transactionId}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>RRN</span>
                        <span className={styles.value}>{transaction.success.rrn}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Approval Code</span>
                        <span className={styles.value}>{transaction.success.approvalCode}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span className={styles.label}>Order ID</span>
                        <span className={styles.value}>{transaction.success.referenceId}</span>
                    </div>
                    <div style={{ height: "3rem" }} />
                    <div className={`${styles.row} ${styles.price}`}>
                        <span className={styles.label}>Total price:</span>
                        <span className={styles.value}>{transaction.success.price} {transaction.success.currency}</span>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Receipt