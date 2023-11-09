import { withAuth } from 'next-auth/middleware'

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            switch (req.nextUrl.pathname) {
                case '/admin':
                    return token?.userRole === 'admin'
                default:
                    return !!token
            }
        },
    },
})

export const config = { matcher: ['/admin', '/me'] }
