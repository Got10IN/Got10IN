import Image from 'next/image'
import FooterImage from '../../../assets/navigation/footer/Footer.png'

function Footer() {
    return (
        <footer>
            <Image
                src={FooterImage}
                alt='temporary footer'
                className='w-full h-auto max-w-full block my-0 mx-auto'
            />
        </footer>
    )
}

export default Footer
