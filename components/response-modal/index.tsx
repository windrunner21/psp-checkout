import styles from "./Modal.module.css"
import ModalProps from "./interface";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";

const ResponseModal = (props: ModalProps) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Image src={`/modal/${props.success ? 'success' : 'error'}.png`} alt="result_icon" width={50} height={50} />
                <div style={{ height: "1.5rem" }} />
                <span className={styles.title}>Payment {props.success ? 'successful' : 'has failed'}</span>
                <div style={{ height: "0.5rem" }} />
                {props.success ?
                    <span className={styles.subtitle}>Your payment has been processed successfully. Here are your <a href={`/${props.id}/receipt`} target="_blank" className={styles.link} rel="noopener noreferrer">payment detals</a>.</span>
                    :
                    <span className={styles.subtitle}>Your payment cannot be completed. Please check your payment details and try again.</span>}
                <div style={{ height: "2rem" }} />
                {props.success && <div className={styles.row}>
                    <Button
                        label='Print receipt'
                        width="200px"
                        height='40px'
                        color='white'
                        backgroundColor='var(--text)'
                        fontSize='1.1rem'
                        radius='0.4rem'

                        loading={false}
                    />
                    <Link href={props.successUrl}>
                        <Button
                            label='Next'
                            width="100px"
                            height='40px'
                            color='white'
                            backgroundColor='var(--primary)'
                            fontSize='1.1rem'
                            radius='0.4rem'

                            loading={false}
                        />
                    </Link>
                </div>}
                {!props.success && <div className={styles.row}>
                    <Button
                        label='OK'
                        width="100px"
                        height='40px'
                        color='white'
                        backgroundColor='var(--text)'
                        fontSize='1.1rem'
                        radius='0.4rem'

                        loading={false}
                        onClick={() => props.setResponseModal(false)}
                    />
                </div>}
            </div>
        </div>
    )
}

export default ResponseModal