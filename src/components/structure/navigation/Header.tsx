import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/navigation/header/logo.png'
import { NavLinks } from '../../../data/navigation/NavLinks'
import { useEffect, useState } from 'react'

const NavLink = ({ path, label }: { path: string; label: string }) => {
    const location = useLocation()

    const isActive = (path: string): boolean => {
        return location.pathname === path
    }

    return (
        <Link
            to={path}
            className={`ml-10 font-semibold no-underline ${
                isActive(path)
                    ? 'text-highlight'
                    : 'text-white hover:text-highlight'
            }`}
        >
            {label}
        </Link>
    )
}

function Header() {
    const navigate = useNavigate()

    const location = useLocation()

    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        setHidden(location.pathname === '/my-college-ranking/result')
    }, [location])

    const isLoggedIn = false

    const loginButtonHandler = () => {
        if (isLoggedIn) {
            navigate('/account')
        } else {
            navigate('/login-signup')
        }
    }

    return (
        <nav
            className={`w-full h-24 fixed top-0 right-0 left-0 z-[331] flex items-end ${
                hidden && 'sm:hidden'
            }`}
        >
            <div
                className={`absolute h-full w-full bg-accent -z-10 ${
                    false && 'opacity-0 transition-opacity'
                }`}
            />
            <div className='flex justify-start items-center flex-nowrap px-1/10 mb-4 w-full'>
                <Link to='/' className='mr-4 select-none'>
                    <img src={Logo} alt='Got10IN' className='max-w-[100px]' />
                </Link>

                <ul className='flex-grow flex flex-row justify-center pl-0 mb-0 sm:hidden'>
                    {NavLinks.map(({ path, label }) => (
                        <NavLink key={label} path={path} label={label} />
                    ))}
                </ul>

                <div className='ml-auto'>
                    <button
                        className='bg-white/10 hover:bg-white/40 duration-150 px-5 py-2.5 text-sm font-semibold text-white border-none rounded-full text-center inline-block cursor-pointer'
                        onClick={loginButtonHandler}
                    >
                        {isLoggedIn ? 'My Account' : 'Log In / Sign Up'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
