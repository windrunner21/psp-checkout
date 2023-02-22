import Head from 'next/head'
import styles from '../styles/404.module.css'

const Page404 = () => {
    return (
        <div>
            <Head>
                <title>404 | Odero</title>
                <meta name="description" content="Odero 404 Page" />
                <meta name="keywords" content="404 Page, Checkout Page, Payment Page, Pay by link, Odero, Odero Azerbaijan, Amex, Visa, Mastercard" />
                <link rel="icon" href="/odero.ico" />
            </Head>

            <main className={styles.main}>
                <span className={styles.subtitle}>Oops, requested page is not found.</span>
                <span className={styles.title}>404</span>
            </main>
        </div>
    )

}

export default Page404