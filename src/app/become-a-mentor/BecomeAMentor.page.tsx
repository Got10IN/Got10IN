'use client'

import Image from 'next/image'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import { Button } from '../../components/buttons/Button.component'
import Page from '../../components/layout/Page.layout'

function BecomeAMentor() {
    return (
        <Page className="flex-col gap-12 items-start">
            <div className="relative w-full pb-1/20">
                <Image
                    src={ComingSoon}
                    alt="Stay tuned, lots of amazing features are coming soon"
                    className="max-w-full pointer-events-none"
                />
                <div className="gap-[8%] absolute flex right-[23%] bottom-[28%] items-center">
                    <Button gray>Subscribe</Button>
                    <p className="text-xl font-semibold mb-[5px] text-white">
                        or
                    </p>
                    <Button>Sign up</Button>
                </div>
            </div>
        </Page>
    )
}

export default BecomeAMentor
