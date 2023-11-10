'use client'

import { SessionProvider } from 'next-auth/react'
import { IComponent } from '../../../utils/types/IComponent'

const NextAuthProvider = ({ children }: IComponent) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider
