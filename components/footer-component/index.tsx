import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.main}>
            <span className={styles.caption}>Powered by Odero © {new Date().getFullYear()}. All rights reserved.</span>
        </div>
    )
}

export default Footer