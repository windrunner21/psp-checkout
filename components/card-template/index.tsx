import Image from "next/image"
import styles from "../card-template/CardTemplate.module.css"
import CardTemplateProps from "./interface"

const CardTemplate = (props: CardTemplateProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.chip}>
                <Image src="/card/chip.png" alt="Card Association" width={30} height={30} />
            </div>
            <div className={styles.column}>
                <span className={styles.cardSpan}>Imran Hajiyev</span>
                <span className={styles.cardSpan}>&#x2022; &#x2022; &#x2022; 2100</span>
                <div className={styles.row}>
                    <span className={styles.cardSpan}>02/26</span>
                    <Image src="/card-associations/visa.svg" alt="Card Association" width={34.92} height={24} />
                </div>
            </div>
        </div>
    )
}

export default CardTemplate