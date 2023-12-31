import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'

import Discord from 'next-auth/providers/discord'
import Google from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'
import clientPromise from '../mongodb/mongodb'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module 'next-auth/jwt' {
    interface JWT {}
}

export const options: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    theme: {
        logo: 'https://www.got10in.com/static/media/logo.cc9c7d238386c8539ffe.png',
    },
    providers: [
        Discord({
            clientId: process.env.AUTH_DISCORD_ID,
            clientSecret: process.env.AUTH_DISCORD_SECRET,
        }),

        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),

        LinkedIn({
            clientId: process.env.AUTH_LINKEDIN_ID,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = 'admin'
            return token
        },
    },
}

// https://next-auth.js.org/configuration/nextjs#getserversession
export async function auth(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, options)
}

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            NEXTAUTH_SECRET: string

            AUTH_DISCORD_ID: string
            AUTH_DISCORD_SECRET: string

            AUTH_GOOGLE_ID: string
            AUTH_GOOGLE_SECRET: string

            AUTH_LINKEDIN_ID: string
            AUTH_LINKEDIN_SECRET: string
        }
    }
}
