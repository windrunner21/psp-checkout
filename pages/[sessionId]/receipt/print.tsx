import styles from '../../../styles/Print.module.css'
import Head from 'next/head'
import OderoLogo from '../../../components/logo'
import { useTransaction } from '../../../network/swr'
import { useRouter } from 'next/router'
import Page404 from '../../_error'
import { formatDate, formatTime } from '../../../controllers/formatting'
import { ReceiptSkeleton } from '../../../components/loading'
import { useEffect } from 'react'

const Receipt = () => {
    const router = useRouter()
    const { sessionId } = router.query
    const { transaction, isLoading, isError } = useTransaction!(sessionId as string)

    if (isError) return <Page404 />

    useEffect!(() => {
        transaction && window.print()
    })

    if (isLoading) return <ReceiptSkeleton />

    return (
        transaction && <div>
            <Head>
                <title>Print Receipt | Odero</title>
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
                        <span>Merchant</span>
                        <span>{transaction.success.merchant}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>Date</span>
                        <span>{formatDate(transaction.success.date)}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>Time</span>
                        <span>{formatTime(transaction.success.date)}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>Transaction ID</span>
                        <span>{transaction.success.transactionId}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>RRN</span>
                        <span>{transaction.success.rrn}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>Approval Code</span>
                        <span>{transaction.success.approvalCode}</span>
                    </div>
                    <div style={{ height: "1.5rem" }} />
                    <div className={styles.row}>
                        <span>Order ID</span>
                        <span>{transaction.success.referenceId}</span>
                    </div>
                    <div style={{ height: "3rem" }} />
                    <div className={`${styles.row} ${styles.price}`}>
                        <span>Total price:</span>
                        <span>{transaction.success.price} {transaction.success.currency}</span>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Receipt