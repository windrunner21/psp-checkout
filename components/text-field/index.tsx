import styles from "../text-field/Textfield.module.css"
import TextFieldProps from "./interface";

const TextField = (props: TextFieldProps) => {
    return (
        <input
            className={styles.input}
            style={{
                width: `${props.width}%`,
                background: `url("/mui-icons/${props.image}.svg") no-repeat left`,
                backgroundPositionX: "0.5rem"
            }}
            placeholder={props.placeholder}
            type={props.type}
            maxLength={props.maxLength}
        />
    )
}

export default TextField