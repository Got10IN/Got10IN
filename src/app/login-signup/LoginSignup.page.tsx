'use client'

import { WishlistButton } from '../../components/functional/WishlistButton'
import Page from '../../components/layout/Page.layout'

function LoginSignup() {
    return (
        <Page className="min-h-[50vh] justify-center">
            <p className="text-accent text-center mx-8">
                Our login and signup features are under development 👉🏼👈🏼
                <br />
                Please check back soon!
                <br />
                In the meantime,
            </p>
            <WishlistButton className="mt-12" />
        </Page>
    )
}

export default LoginSignup
