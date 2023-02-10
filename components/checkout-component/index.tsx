import Image from 'next/image';
import Footer from '../footer-component';
import Item from '../item';
import styles from './Checkout.module.css'
import CheckoutProps from "./interface";

const Checkout = (props: CheckoutProps) => {

    const items = [
        {
            name: 'Ted Lasso Seasons 1, 2',
            price: '9.99',
            description: 'Follows an American football coach Ted Lasso who heads to the U.K. to manage a struggling.',
            image: "/test-logos/tedlasso.jpg"
        },
        {
            name: 'Zack Snyder\'s Justice League',
            price: '19.99',
            description: 'Determined to ensure that Superman\'s ultimate sacrifice wasn\'t in vain, Bruce Wayne recruits a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',
            image: "/test-logos/zsjl.jpg"
        },
        {
            name: 'The Batman',
            price: '14.99',
            description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
            image: "/test-logos/batman.jpg"
        },
        {
            name: 'Cherry',
            price: '7.99',
            description: 'Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.',
            image: "/test-logos/cherry.jpg"
        },
        {
            name: 'Deadpool 2',
            price: '4.99',
            description: 'Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.',
            image: "/test-logos/deadpool.jpg"
        },
        {
            name: 'Batman v Superman: Ultimate Edition',
            price: '19.99',
            description: 'Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.',
            image: "/test-logos/bvs.jpg"
        },
        {
            name: 'The Morning Show Season 1',
            price: '4.99',
            description: 'An inside look at the lives of the people who help America wake up in the morning, exploring the unique challenges faced by the team.',
            image: "/test-logos/morningshow.jpg"
        },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.column}>
                {/* store logo if exists */}
                {
                    true &&
                    <div className={styles.storeLogo}>
                        <Image src="/test-logos/appletvplus.svg" alt="back" fill style={{ borderRadius: '0.4rem' }} />
                    </div>
                }
                <div style={{ height: "1rem" }} />

                {/* go back to store */}
                <div className={styles.row}>
                    <div className={styles.circle}>
                        <Image src="/mui-icons/back.svg" alt="back" width={20} height={20} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div style={{ width: "1rem" }} />
                    <span className={styles.store}>Apple TV+</span>
                </div>

                <div style={{ height: "2.5rem" }} />

                {/* title */}
                <span className={styles.title}>Overall price and items you are about to buy</span>

                <div style={{ height: "0.25rem" }} />

                {/* price */}
                <span className={styles.price}>82.93 ₼</span>

                {/* items */}
                <div className={`${styles.column} ${styles.items}`}>
                    {items.map((item, index) => (
                        <Item key={index} name={item.name} price={item.price} description={item.description} image={item.image} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Checkout