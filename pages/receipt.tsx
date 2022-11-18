import Head from 'next/head'
import Image from 'next/image'
import OderoLogo from '../components/logo'
import PrimaryButton from '../components/primary-button'
import PrintButton from '../components/print-button'
import styles from '../styles/Receipt.module.css'

export default function Receipt() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Receipt | Odero</title>
                <meta name="description" content="Receipt Page by Odero.az after payment is successfully completed" />
                <meta name="keywords" content="Receipt, Receipt Page, Payment Page, Amex, Visa, Mastercard, PDF, Download" />
                <meta name="theme-color" content="#F0FAED" media="(prefers-color-scheme: light)" />
                {/* <meta name="theme-color" content="#222222" media="(prefers-color-scheme: dark)" /> */}
                <link rel="icon" href="/odero.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.topLeft} />
                <div className={styles.topRight} />
                <div className={styles.bottomLeft} />
                <div className={styles.bottomRight} />
                <div className={styles.header}>
                    <Image src="/success.png" alt="success" width={50} height={50} />
                    <span className={styles.headerCaption}>Your payment has been processed successfully</span>
                </div>
                <div id="printable">
                    <div className={styles.content}>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Total price:</span>
                            <span className={styles.value}>102.10</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Currency</span>
                            <span className={styles.value}>AZN</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Order Number:</span>
                            <span className={styles.value}>#3234242</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>RRN:</span>
                            <span className={styles.value}>81283609931112</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Approval Code:</span>
                            <span className={styles.value}>609873</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Date and Time:</span>
                            <span className={styles.value}>24/08/22 09:14</span>
                        </div>
                        <div className={styles.rowContent}>
                            <span className={styles.title}>Company:</span>
                            <span className={styles.value}>Netflix</span>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.rowFooter}>
                        <PrimaryButton title="Back" color="#3B3B3B" />
                        <div style={{ width: "2rem" }} />
                        <PrintButton />
                    </div>
                </div>
                <div className={styles.captions}>
                    <OderoLogo />
                </div>
            </main>
        </div>
    )
}
