/*
 * 3D Secure Page for Test Environment
 */

import Image from "next/image";
import Button from "../components/button";
import styles from "../styles/3DSecure.module.css";

interface ThreeDSecureProps {
  setThreeDSecureModal: (params: any) => void;
}

const ThreeDSecure = (props: ThreeDSecureProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cancel}>
          <div className={styles.circle} onClick={() => props.setThreeDSecureModal(false)}>
            <Image src="/mui-icons/close.svg" alt="back" width={20} height={20} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
        <span className={styles.title}>Fake 3D Secure 2</span>
        <div style={{ height: "1rem" }} />
        <span className={styles.subtitle}><b>Live environment</b> will ask end-users to authorize transaction using <b>push notification</b>, <b>one time passcode</b> or <b>any another method chosen by their bank</b>.</span>
        <div style={{ height: "3rem" }} />
        <div className={`${styles.row} ${styles.spaceBetween}`}>
          <Button
            label='Fail'
            width="140px"
            height='40px'
            color='white'
            backgroundColor='var(--text)'
            fontSize='1.1rem'
            radius='0.4rem'

            loading={false}
          />
          <Button
            label='Success'
            width="140px"
            height='40px'
            color='white'
            backgroundColor='var(--primary)'
            fontSize='1.1rem'
            radius='0.4rem'

            loading={false}
          />
        </div>
        <div style={{ height: "2rem" }} />
        <span className={styles.caption}>Powered by Odero ©</span>
      </div>
    </div>
  );
};

export default ThreeDSecure;
