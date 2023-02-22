import styles from "./Button.module.css"
import ButtonProps from "./interface";

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button
                style={{
                    width: props.width,
                    height: props.height,
                    color: props.color,
                    backgroundColor: props.backgroundColor,
                    fontSize: props.fontSize,
                    borderRadius: props.radius
                }}
                className={styles.button}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}

export default Button