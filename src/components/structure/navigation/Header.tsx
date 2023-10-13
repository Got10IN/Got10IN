import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/navigation/header/logo.png'
import { NavLinks } from '../../../data/navigation/NavLinks'

function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = (path: string): boolean => {
        return location.pathname === path
    }

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('isLoggedIn')
    )

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
    }

    const loginButtonHandler = () => {
        if (isLoggedIn) {
            navigate('/account')
        } else {
            navigate('/login-signup')
        }
    }

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

    return (
        <nav className='w-full fixed top-0 right-0 left-0 z-[331] bg-accent'>
            <div className='flex justify-start items-center flex-nowrap px-1/10 pt-10 pb-[18px]'>
                <Link to='/' className='my-auto mr-4 select-none'>
                    <img src={Logo} alt='Got10IN' className='max-w-[100px]' />
                </Link>

                <ul className='flex-grow flex flex-row justify-center pl-0 mb-0'>
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