import styles from './Item.module.css'
import ItemProps from "./interface";
import Image from 'next/image';

const Item = (props: ItemProps) => {
    return (
        <div className={styles.main}>
            {/* raw row */}
            <div className={`${styles.row} ${styles.spaceBetween}`}>
                {/* image if exists and name and description */}
                <div className={styles.row}>
                    {/* image */}
                    {props.image && <div className={`${styles.row} ${styles.image}`}>
                        <Image src={props.image} alt="back" fill style={{ borderRadius: '0.4rem' }} />
                    </div>}
                    {/* name and description */}
                    <div className={styles.column}>
                        <span className={styles.name}>{props.name}</span>
                        <div style={{ height: "1rem" }} />
                        <span className={styles.description} style={{ width: props.image ? '15vw' : "30vw" }}>{props.description}</span>
                    </div>
                </div>
                {/* price */}
                <span className={styles.price}>{props.price} ₼</span>
            </div>
        </div>
    )
}

export default Item