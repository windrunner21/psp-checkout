import Link from "next/link"
import LoadingIndicator from "../loading-indicator"
import styles from "../primary-button/PrimaryButton.module.css"
import PrimaryButtonProps from "./interface"

const PrimaryButton = (props: PrimaryButtonProps) => {
    props.logMessage

    return (
        <Link href={"/receipt"} className={styles.link}>
            <button className={styles.button} onClick={props.onClick} style={{ backgroundColor: `${props.color}` }}>
                {!props.loading && props.title}
                {props.loading && <LoadingIndicator />}
            </button>
        </Link>
    )
}

export default PrimaryButton