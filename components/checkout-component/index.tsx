import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '../footer-component';
import Item from '../item';
import styles from './Checkout.module.css'
import CheckoutProps from "./interface";

const Checkout = (props: CheckoutProps) => {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let tempPrice: number = 0
        props.items.forEach(item => {
            tempPrice += item.price * item.quantity
        });

        setTotalPrice(tempPrice)
    }, [props.items])

    return (
        <div className={styles.main}>
            <div className={styles.column}>
                {/* store logo if exists */}
                {
                    props.merchant.logo &&
                    <div className={styles.storeLogo}>
                        <Image src={props.merchant.logo} alt="back" fill style={{ borderRadius: '0.4rem' }} />
                    </div>
                }
                <div style={{ height: "1rem" }} />

                {/* go back to store */}
                <div className={styles.row}>
                    <div className={styles.circle}>
                        <Image src="/mui-icons/back.svg" alt="back" width={20} height={20} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div style={{ width: "1rem" }} />
                    <span className={styles.store}>{props.merchant.displayName}</span>
                </div>

                <div style={{ height: "2.5rem" }} />

                {/* title */}
                <span className={styles.title}>Overall price and items you are about to buy</span>

                <div style={{ height: "0.25rem" }} />

                {/* price */}
                <span className={styles.price}>{totalPrice} ₼</span>

                {/* items */}
                <div className={`${styles.column} ${styles.items}`}>
                    {props.items.map((item, index) => (
                        <Item key={index} name={item.name} price={item.price} quantity={item.quantity} description={item.description} image={item.image} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Checkout