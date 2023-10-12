import axios from 'axios'
import { ChangeEvent, useState } from 'react'

import Buttons from '../../assets/aboutUs/3buttons.png'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import Got10INOutline from '../../assets/aboutUs/GOT10INOutline.png'
import Hi from '../../assets/aboutUs/Hi.png'
import LogoAboutUs from '../../assets/aboutUs/LogoAboutUs.png'
import OurStory from '../../assets/aboutUs/OurStory.png'
import RoadMap from '../../assets/aboutUs/Roadmap.png'
import RoadMapTitle from '../../assets/aboutUs/RoadmapTitle.png'
import { Button } from '../../components/buttons/Button'

function AboutUs() {
    const [email, setEmail] = useState('')

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubscribe = async () => {
        try {
            const response = await axios.post(
                'https://got10in-backend-cfba39007310.herokuapp.com/subscribe',
                { email: email }
            )
            if (response.status === 200) {
                alert('Subscribed successfully!')
            } else {
                alert('Error subscribing. Please try again.')
            }
        } catch (error) {
            alert('Error subscribing. Please try again.')
        }
    }

    return (
        <div className='container-white'>
            <div className='flex justify-between mx-1/10 mt-1/20 gap-1/10'>
                <div className='flex-1'>
                    <img src={LogoAboutUs} alt='Logo' className='max-w-full' />
                    <div
                        className='max-w-full'
                        style={{
                            display: 'flex',
                            gap: '20px',
                            paddingTop: '40px',
                            paddingBottom: '100px',
                        }}
                    >
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Enter your email'
                            style={{
                                borderRadius: '50px',
                                width: '80%',
                                height: '40px',
                            }}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button
                            className='subscribe-button-1'
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                <div
                    className='flex-1 pointer-events-none'
                    style={{ paddingTop: '4%' }}
                >
                    <img src={Got10INOutline} alt='' className='max-w-full' />
                    <img
                        src={Buttons}
                        alt='Matching, Consulting, Planning'
                        className='max-w-full'
                        style={{ paddingTop: '5%' }}
                    />
                    <img
                        src={Hi}
                        alt=''
                        className='max-w-full'
                        style={{ paddingTop: '20%' }}
                    />
                </div>
            </div>
            <div className='flex justify-between px-1/10 pt-1/20 gap-1/10 pointer-events-none'>
                <img src={OurStory} alt='Testimonials' className='max-w-full' />
            </div>
            <img
                src={RoadMapTitle}
                alt='Roadmap'
                className='pointer-events-none pl-1/10 w-2/5 pt-1/10'
            />
            <div className='container-small'>
                <img
                    src={RoadMap}
                    alt='roadmap details'
                    className='max-w-full'
                />
            </div>
            <div className='flex justify-between px-1/10 pt-1/20 pb-1/10 gap-1/10'>
                <div className='relative w-full pb-1/20'>
                    <img
                        src={ComingSoon}
                        alt='StudentSay'
                        className='max-w-full pointer-events-none'
                    />
                    <div className='gap-[8%] absolute flex right-[23%] bottom-[28%] items-center'>
                        <Button gray>Subscribe</Button>
                        <p className='text-xl font-semibold mb-[5px] text-white'>
                            or
                        </p>
                        <Button>Sign up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
