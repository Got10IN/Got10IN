'use client'

import Image from 'next/image'
import Buttons from '../../assets/aboutUs/3buttons.png'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import Got10INOutline from '../../assets/aboutUs/GOT10INOutline.png'
import Hi from '../../assets/aboutUs/Hi.png'
import LogoAboutUs from '../../assets/aboutUs/LogoAboutUs.png'
import OurStory from '../../assets/aboutUs/OurStory.png'
import RoadMap from '../../assets/aboutUs/Roadmap.png'
import RoadMapTitle from '../../assets/aboutUs/RoadmapTitle.png'
import { Button } from '../../components/buttons/Button.component'
import { SubscribeField } from '../../components/functional/SubscribeField'
import Page from '../../components/layout/Page.layout'
import { Parallax } from '../../utils/modules/react-scroll-parallax.d'
import { useAppSelector } from '../../utils/hooks/redux.hook'

function AboutUs() {
    const { mobile } = useAppSelector((state) => state.context)

    return (
        <Page className="flex-col gap-12 items-start">
            <div className="flex justify-between gap-1/10">
                <Parallax speed={mobile ? 0 : -5} className="flex-1">
                    <Image
                        src={LogoAboutUs}
                        alt=""
                        className="max-w-full pointer-events-none"
                    />
                    <div className="max-w-full flex items-center gap-5 pt-10 pb-20">
                        <SubscribeField />
                    </div>
                </Parallax>
                <Parallax
                    speed={5}
                    className="flex-1 pointer-events-none"
                    style={{ paddingTop: '4%' }}
                >
                    <Image src={Got10INOutline} alt="" className="max-w-full" />
                    <Image
                        src={Buttons}
                        alt="Matching, Consulting, Planning"
                        className="max-w-full"
                        style={{ paddingTop: '5%' }}
                    />
                    <Image
                        src={Hi}
                        alt=""
                        className="max-w-full"
                        style={{ paddingTop: '20%' }}
                    />
                </Parallax>
            </div>
            <div className="flex justify-between gap-1/10 pointer-events-none mb-4">
                <Image
                    src={OurStory}
                    alt="Testimonials"
                    className="max-w-full"
                />
            </div>
            <div className="w-full">
                <Image
                    src={RoadMapTitle}
                    alt="Roadmap"
                    className="pointer-events-none w-2/5"
                />
                <div className="flex items-center pb-1/10">
                    <Image
                        src={RoadMap}
                        alt="roadmap details"
                        className="max-w-full"
                    />
                </div>
            </div>
            <div className="flex justify-between gap-1/10">
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
            </div>
        </Page>
    )
}

export default AboutUs
