import styles from './Payment.module.css'
import PaymentProps from './interface';
import OderoLogo from '../logo';
import CardForm from '../card-form';
import Button from '../button';

const Payment = (props: PaymentProps) => {
    return (
        <div className={styles.main}>
            {/* white content itself */}
            <div className={styles.column}>
                <div className={styles.content}>

                    {/* logo */}
                    <OderoLogo />

                    {/* card form */}
                    <CardForm />

                    {/* horizontal divider */}
                    <div className={styles.row}>
                        <div className={styles.hr} />
                        <div style={{ width: "1rem" }} />
                        <span className={styles.sectionLabel}>Receive electronic receipt</span>
                        <div style={{ width: "1rem" }} />
                        <div className={styles.hr} />
                    </div>

                    <div className={styles.form}>
                        {/* email */}
                        <span className={styles.label}>Email</span>
                        <input
                            className={styles.input}
                            placeholder="Enter your email"
                            style={{ borderRadius: '0.4rem' }}
                        />

                        {/* phone number if needed */}
                        {false && <>
                            <span className={styles.label}>Phone Number</span>
                            <input
                                className={styles.input}
                                placeholder="Enter your phone number"
                                style={{ borderRadius: '0.4rem' }}
                            />
                        </>
                        }
                    </div>

                    {/* pay button*/}
                    <div style={{ marginTop: '2rem' }}>
                        <Button
                            label='Pay'
                            width='100%'
                            height='45px'
                            color='white'
                            backgroundColor='var(--black)'
                            fontSize='1.2rem'
                            radius='0.4rem'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment