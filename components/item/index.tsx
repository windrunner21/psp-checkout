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
                        <Image src={props.image} alt="image" fill style={{ borderRadius: '0.4rem' }} />
                    </div>}
                    {/* name, description and quantity */}
                    <div className={styles.column}>
                        <span className={styles.name}>{props.name}</span>
                        {props.description && <span className={styles.description} style={{ width: props.image ? '15vw' : "30vw", marginTop: "1rem" }}>{props.description}</span>}
                        <span className={styles.times} style={{ marginTop: "1rem" }}>Quantity: {props.quantity}</span>
                    </div>
                </div>
                {/* price */}
                <span className={styles.price}>{props.price.toFixed(2)} ₼</span>
            </div>
        </div>
    )
}

export default Item