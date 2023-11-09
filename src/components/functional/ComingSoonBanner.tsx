import { Button } from '../buttons/Button.component'
import comingSoon from '../../assets/components/ComingSoon.png'
import Image from 'next/image'

const ComingSoonBanner = () => {
    return (
        <div className='relative w-full pb-1/20'>
            <Image
                src={comingSoon}
                alt='Stay tuned, lots of amazing features are coming soon'
                className='max-w-full pointer-events-none'
            />
            <div className='gap-[8%] absolute flex right-[23%] bottom-[28%] items-center'>
                <Button gray>Subscribe</Button>
                <p className='text-xl font-semibold mb-[5px] text-white'>or</p>
                <Button>Sign up</Button>
            </div>
        </div>
    )
}

export default ComingSoonBanner
