'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import type { IconType } from 'react-icons'
import { FaDiscord, FaGoogle, FaLinkedin } from 'react-icons/fa6'
import Rocket from '../../assets/home/Rocket.png'
import Page from '../../components/layout/Page.layout'
import { IComponent } from '../../utils/types/IComponent'

const LoginSignup = () => {
    const router = useRouter()

    const { status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/account')
        }
    }, [router, status])

    return (
        <Page className="min-h-[50vh] justify-center">
            <div className="flex flex-row flex-wrap bg-accent rounded-3xl w-full px-10 pt-10">
                <div className="basis-1/2">
                <p className='text-xl font-bold text-white text-right'>Select an option to sign in</p>
                    <Image src={Rocket} alt="" />
                </div>
                <div className="basis-1/2">
                    <div className="flex items-stretch flex-col mx-auto w-1/2 gap-4">
                        
                        <LogInOptionButton
                            method="discord"
                            methodName="Discord"
                            className="hover:bg-[#5962e0]"
                            Icon={FaDiscord}
                        />
                        <LogInOptionButton
                            method="google"
                            methodName="Google"
                            className='hover:bg-highlight'
                            Icon={FaGoogle}
                        />
                        <LogInOptionButton
                            method="linkedin"
                            methodName="Linkedin"
                            className='hover:bg-[#3579b1]'
                            Icon={FaLinkedin}
                        />
                    </div>
                </div>
            </div>
        </Page>
    )
}

type LogInButtonProps = {
    method: string
    methodName: string
    Icon: IconType
} & IComponent

const LogInOptionButton = ({
    method,
    methodName,
    Icon,
    className,
    ...args
}: LogInButtonProps) => {
    return (
        <button
            className={
                'flex items-center p-2 bg-white/10 duration-150 text-white rounded-md border border-white/30 ' +
                className
            }
            onClick={() => {
                signIn(method)
            }}
            {...args}
        >
            <Icon />
            <div className="grow">Sign in with {methodName}</div>
        </button>
    )
}

export default LoginSignup
