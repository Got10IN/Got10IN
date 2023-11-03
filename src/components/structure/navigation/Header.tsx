import Logo from '../../../assets/navigation/header/logo.png'
import { NavLinks } from '../../../data/navigation/NavLinks'
import { useEffect, useState } from 'react'
import { FaDiscord } from 'react-icons/fa6'
import { DiscordInvitation } from '../../../utils/constants/links'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const NavLink = ({ path, label }: { path: string; label: string }) => {
    const location = usePathname()

    const isActive = (path: string): boolean => {
        return location === path
    }

    return (
        <Link
            href={path}
            className={`ml-10 font-semibold no-underline cursor-pointer ${
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
    const router = useRouter()

    const [hidden, setHidden] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        setHidden(pathname === '/my-college-ranking/result')
    }, [pathname])

    const isLoggedIn = false

    const loginButtonHandler = () => {
        if (isLoggedIn) {
            router.push('/account')
        } else {
            router.push('/login-signup')
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
            <div className="flex justify-start items-center flex-nowrap px-1/10 mb-4 w-full">
                <Link href="/" className="mr-4 select-none">
                    <Image src={Logo} alt="Got10IN" className="max-w-[100px]" />
                </Link>

                <ul className="flex-grow flex flex-row justify-center pl-0 mb-0 sm:hidden">
                    {NavLinks.map(({ path, label }) => (
                        <NavLink key={label} path={path} label={label} />
                    ))}
                </ul>

                <div className="ml-auto hidden">
                    <button
                        className="bg-white/10 hover:bg-white/40 duration-150 px-5 py-2.5 text-sm font-semibold text-white border-none rounded-full text-center inline-block cursor-pointer"
                        onClick={loginButtonHandler}
                    >
                        {isLoggedIn ? 'My Account' : 'Log In / Sign Up'}
                    </button>
                </div>
                <div
                    className="ml-auto bg-white/10 hover:bg-white/40 duration-150 p-3 rounded-full cursor-pointer"
                    onClick={() => {
                        window.location.href = DiscordInvitation
                    }}
                >
                    <FaDiscord className="w-6 h-6 text-white" />
                </div>
            </div>
        </nav>
    )
}

export default Header
