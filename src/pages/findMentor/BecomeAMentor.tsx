import { Parallax } from 'react-scroll-parallax'
import Buttons from '../../assets/aboutUs/3buttons.png'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import Got10INOutline from '../../assets/aboutUs/GOT10INOutline.png'
import Hi from '../../assets/aboutUs/Hi.png'
import LogoAboutUs from '../../assets/aboutUs/LogoAboutUs.png'
import OurStory from '../../assets/aboutUs/OurStory.png'
import RoadMap from '../../assets/aboutUs/Roadmap.png'
import RoadMapTitle from '../../assets/aboutUs/RoadmapTitle.png'
import { Button } from '../../components/buttons/Button'
import { SubscribeField } from '../../components/functional/SubscribeFIeld'
import Page from '../../components/layout/Page.layout'

function BecomeAMentor() {
    return (
        <Page className='flex-col gap-12 items-start'>
            <img
                src={ComingSoon}
                alt=''
                className='max-w-full pointer-events-none'
                />

            
        </Page>
    )
}

export default BecomeAMentor
