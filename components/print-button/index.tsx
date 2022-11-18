import Link from "next/link"
import LoadingIndicator from "../loading-indicator"
import styles from "../print-button/PrintButton.module.css"
import PrintButtonProps from "./interface"

const PrintButton = (props: PrintButtonProps) => {
    props.logMessage

    return (
        <Link href={"/receipt"} className={styles.link}>
            <button className={styles.button} onClick={() => window.print()}>
                {!props.loading && "Print"}
                {props.loading && <LoadingIndicator />}
            </button>
        </Link>
    )
}

export default PrintButton