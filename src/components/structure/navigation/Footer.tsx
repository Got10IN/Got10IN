import { ReactNode } from 'react'
import Logo from '../../../assets/navigation/footer/LogoFooterWithTagline.svg'

const Footer = () => {
    return (
        <footer className='w-screen h-auto flex text-text-light'>
            <div>
                <img
                    src={Logo}
                    alt='Your AI empowered college application assistant'
                />
                <div>
                    <div>
                        <CategoryTitle>About Got10IN</CategoryTitle>
                        <ul>
                            <button></button>
                            <button></button>
                            <button></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p>© 2023 Got10IN</p>
            </div>
        </footer>
    )
}

const CategoryTitle = ({ children }: { children: ReactNode }) => {
    return <p className='text-white text-xl font-medium'>{children}</p>
}

export default Footer
