'use client'

import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import LogoWithTagline from '../assets/home/LogoWithTagline.png'
import Rocket from '../assets/home/Rocket.png'
import { SubscribeField } from '../components/functional/SubscribeField'
import { HOME_CARDS, taglines } from '../data/home/Home.data'
import Card from '../components/card/Card.component'
import {
    Dot,
    DotsContainer,
    SliderContainer,
} from '../components/util/Slider.component'
import { useReduxContext } from '../utils/hooks/redux.hook'
import Image from 'next/image'

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 3

    const { mobile } = useReduxContext()

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [currentSlide])

    return (
        <div className="w-full mx-0 my-auto overflow-hidden bg-accent">
            <div className="flex justify-between px-1/10 items-center pt-1/10 gap-1/10 overflow-hidden sm:flex-col-reverse sm:pt-1/5">
                <span className="absolute bottom-1/20 left-1/5 w-64 h-64 blur-[350px] rounded-full bg-highlight block" />
                {/* <span className='absolute -top-1/10 right-1/10 w-80 h-80 blur-[350px] rounded-full bg-secondary block' /> */}
                <Parallax className="flex-1" speed={-10}>
                    <p className="text-3xl mb-[5px] text-highlight font-semibold">
                        Are you
                    </p>
                    <SliderContainer postion="leading">
                        <Image
                            src={taglines[currentSlide].image}
                            alt={taglines[currentSlide].alt}
                            className="max-w-full object-cover"
                            style={{ marginTop: '1%', marginBottom: '5%' }}
                        />
                        <DotsContainer>
                            {taglines.map((_, slideNumber) => (
                                <Dot
                                    key={slideNumber}
                                    slideNumber={slideNumber}
                                    currentSlide={currentSlide}
                                    setCurrentSlide={setCurrentSlide}
                                />
                            ))}
                        </DotsContainer>
                    </SliderContainer>
                    <div className="flex gap-4 mt-1/5 mb-1/10 h-10 sm:w-full">
                        <SubscribeField />
                    </div>
                </Parallax>
                <div className="flex-1">
                    <Parallax speed={mobile ? 0 : -10}>
                        <Image
                            src={LogoWithTagline}
                            alt=""
                            className="max-w-full"
                        />
                    </Parallax>
                    <Image
                        src={Rocket}
                        alt=""
                        className="max-w-full"
                        style={{ marginTop: '-40px' }}
                    />
                </div>
            </div>
            <div className="bg-white pt-12 w-full">
                <p className="text-accent text-2xl font-black mx-1/10 my-1/20">
                    Explore our features
                </p>

                {HOME_CARDS.map(
                    ({ title, description, image, button, reverse }) => (
                        <Card
                            key={title}
                            title={title}
                            description={description}
                            image={image}
                            button={button}
                            reverse={reverse}
                        />
                    )
                )}

                {/* <p className='text-accent text-2xl font-black mx-1/10 mb-1/20'>
                    Hear from our students:
                </p>
                <div className='flex px-1/10 items-center pb-1/10'>
                    <SliderContainer postion='center'>
                        <Image
                            src={testimonials[currentSlide].image}
                            alt={testimonials[currentSlide].alt}
                            className='max-w-full'
                            style={{ marginBottom: '3%' }}
                        />
                        <DotsContainer>
                            {testimonials.map((_, slideNumber) => (
                                <Dot
                                    key={slideNumber}
                                    slideNumber={slideNumber}
                                    currentSlide={currentSlide}
                                    setCurrentSlide={setCurrentSlide}
                                    light
                                />
                            ))}
                        </DotsContainer>
                    </SliderContainer>
                </div> */}
            </div>
        </div>
    )
}

export default Home
