import React from "react";
import {
    formatCreditCard,
    formatExpireMonth,
    isValidExpireMonth,
    isValidExpireYear,
    isValidNameSurname,
    isValidPassword,
    retrieveCardAssociations,
    validateCard
} from "../../constants";
import styles from "../text-field/Textfield.module.css"
import TextFieldProps from "./interface";

const TextField = (props: TextFieldProps) => {
    const [hasError, setHasError] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (props.autofocus) {
            inputRef.current?.focus();
        }
    }, [props.autofocus])

    // for formatting and validation
    function onKeyUp(target: EventTarget) {
        const targetStrong = target as HTMLTextAreaElement;

        switch (props.validate) {
            case "credit-card":
                formatCreditCard(target)
                // card association check till 4 characters
                if (targetStrong.value.length <= 4) {
                    props.setAssociation!(retrieveCardAssociations(target))
                }

                props.save(targetStrong.value.replace(/\D/g, ""))
                break;
            case "full-name":
                setHasError(!isValidNameSurname(target))
                props.save(targetStrong.value)
                break;
            default:
                props.save(targetStrong.value.replace(/\D/g, ""))
                targetStrong.value = targetStrong.value.replace(/\D/g, "")
                break;
        }
    }

    // for validation
    function onBlur(target: EventTarget) {
        switch (props.validate) {
            case "credit-card":
                setHasError(!validateCard(target))
                break;
            case "expire-month":
                const targetStrong = target as HTMLTextAreaElement
                // validate
                setHasError(!isValidExpireMonth(target, props.holding!))
                // format
                formatExpireMonth(target)
                // save formatted
                props.save(targetStrong.value)
                break;
            case "expire-year":
                setHasError(!isValidExpireYear(target, props.holding!))
                break;
            case "password":
                setHasError(!isValidPassword(target))
                break;
            default:
                break;
        }
    };

    return (
        <input
            ref={inputRef}
            className={`${styles.input} ${hasError ? styles.error : ''}`}
            style={{ width: `${props.width}%` }}
            placeholder={props.placeholder}
            type={props.type}
            maxLength={props.maxLength}
            inputMode={props.numerical ? "numeric" : "text"}
            autoComplete="on"
            onPaste={(e) => e.preventDefault()}
            onKeyUp={(e) => onKeyUp(e.target)}
            onBlur={(e) => onBlur(e.target)}
        />
    )
}

export default TextField