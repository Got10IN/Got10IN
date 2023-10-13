import { WishlistButton } from '../../components/functional/WishlistButton'
import './LoginSignup.css'

function LoginSignup() {
    return (
        <div className='min-h-[90vh] bg-white w-full flex items-center justify-center flex-col gap'>
            <p className='text-accent text-center'>
                Our login and signup features are under development 👉🏼👈🏼
                <br />
                Please check back soon!
                <br />
                In the meantime,
            </p>
            <WishlistButton />
        </div>
    )
}

export default LoginSignup
