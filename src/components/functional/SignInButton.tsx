'use client'

import { useSession } from 'next-auth/react'
import { Button } from '../buttons/Button.component'
import { useRouter } from 'next/navigation'

const SignInButton = () => {
    const router = useRouter()
    const { data: session, status } = useSession()

    return (
        <Button
            className="w-max flex-none grow-0 box-border"
            gray
            onClick={() => {
                if (status === 'authenticated') {
                    router.replace('/account')
                } else {
                    router.push('/login-signup')
                }
            }}
        >
            {session ? 'Log in' : 'My Account'}
        </Button>
    )
}

export default SignInButton
