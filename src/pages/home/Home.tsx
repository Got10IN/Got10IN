import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import LogoWithTagline from '../../assets/home/LogoWithTagline.png'
import Rocket from '../../assets/home/Rocket.png'
import Tagline0 from '../../assets/home/Tagline0.png'
import Tagline1 from '../../assets/home/Tagline1.png'
import Tagline2 from '../../assets/home/Tagline2.png'
import Testimonial0 from '../../assets/home/Testimonial0.png'
import Testimonial1 from '../../assets/home/Testimonial1.png'
import Testimonial2 from '../../assets/home/Testimonial2.png'
import { HOME_CARDS } from '../../data/home/Home.data'
import Card from './Card.component'
import { Dot, DotsContainer, SliderContainer } from './Slider.component'
import { SubscribeField } from '../../components/functional/SubscribeFIeld'

function Home() {
    const [email, setEmail] = useState('')
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 3

    const taglines: { image: string; alt: string }[] = [
        {
            image: Tagline0,
            alt: 'feeling lost in the search for the perfect school?',
        },
        {
            image: Tagline1,
            alt: 'uncertain about the next steps in college application?',
        },
        {
            image: Tagline2,
            alt: 'overwhelmed by those crazy ranks of national colleges?',
        },
    ]

    const testimonials: { image: string; alt: string }[] = [
        { image: Testimonial0, alt: 'testimonial' },
        { image: Testimonial1, alt: 'testimonial' },
        { image: Testimonial2, alt: 'testimonial' },
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [currentSlide])

    return (
        <div className='w-full mx-0 my-auto overflow-hidden'>
            <div className='flex justify-between px-1/10 items-center pt-1/10 gap-1/10 overflow-hidden sm:flex-col-reverse sm:pt-1/5'>
                {/* <span className='absolute bottom-1/10 left-1/5 w-80 h-80 blur-[350px] rounded-full bg-highlight block' /> */}
                {/* <span className='absolute -top-1/10 right-1/10 w-80 h-80 blur-[350px] rounded-full bg-secondary block' /> */}
                <Parallax className='flex-1' speed={-10}>
                    <p className='text-3xl mb-[5px] text-highlight font-semibold'>
                        Are you
                    </p>
                    <SliderContainer postion='leading'>
                        <img
                            src={taglines[currentSlide].image}
                            alt={taglines[currentSlide].alt}
                            className='max-w-full object-cover'
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
                    <div className='flex gap-4 mt-1/5 mb-1/10 h-10 sm:w-full'>
                        <SubscribeField />
                    </div>
                </Parallax>
                <div className='flex-1'>
                    <Parallax speed={-10}>
                        <img
                            src={LogoWithTagline}
                            alt=''
                            className='max-w-full'
                        />
                    </Parallax>
                    <img
                        src={Rocket}
                        alt=''
                        className='max-w-full'
                        style={{ marginTop: '-40px' }}
                    />
                </div>
            </div>
            <div className='bg-white pt-12 w-full'>
                <p className='text-accent text-2xl font-black mx-1/10 my-1/20'>
                    Explore our features
                </p>

                {HOME_CARDS.map((card) => Card(card))}

                <p className='text-accent text-2xl font-black mx-1/10 mb-1/20'>
                    Hear from our students:
                </p>
                <div className='flex px-1/10 items-center pb-1/10'>
                    <SliderContainer postion='center'>
                        <img
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
                </div>
            </div>
        </div>
    )
}

export default Home
