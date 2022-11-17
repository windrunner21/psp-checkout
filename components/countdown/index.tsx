import React from "react"
import styles from "../countdown/Countdown.module.css"
import CountdownProps from "./interface"
import { Fragment } from 'react';

const Countdown = (props: CountdownProps) => {
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(3)
    const [expired, setExpired] = React.useState(false)

    function updateTime() {
        if (minutes == 0 && seconds == 0) {
            setExpired(true)
        }
        else {
            if (seconds == 0) {
                setMinutes(minutes => minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }
    }

    React.useEffect(() => {
        const token = setTimeout(updateTime, 1000)

        return function cleanUp() {
            clearTimeout(token);
        }
    });

    return (
        <div>
            <span className={styles.digit}>0</span>
            <span className={styles.digit}>{minutes}</span>
            <span>:</span>
            <>
                {seconds.toString().split('').map((secondsDigit, index) => (
                    <Fragment key={index}>
                        {seconds < 10 ? <span className={styles.digit}>0</span> : <></>}
                        <span className={styles.digit}>{secondsDigit}</span>
                    </Fragment>
                ))}
            </>
        </div>
    )
}

export default Countdown