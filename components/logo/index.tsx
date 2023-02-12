import Image from 'next/image'

const OderoLogo = () => {
    return (
        <picture>
            <source
                srcSet="/odero-dark.svg"
                media="(prefers-color-scheme: dark)" />
            <Image src="/odero.svg" alt="Odero.az logo for the payment page" width={95} height={35} />
        </picture>
    )
}

export default OderoLogo