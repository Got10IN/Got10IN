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
import Card from './Card'
import './Home.css'

function Home() {
    const [email, setEmail] = useState('')
    const [currentSlide, setCurrentSlide] = useState(0) // 追踪当前图片编号
    const totalSlides = 3 // 总共的图片数量

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
            // 更新圆点
        }, 3000) // 3秒自动切换

        return () => {
            clearTimeout(timer)
        }
    }, [currentSlide])

    const handleDotHover = (slideNumber: number) => {
        setCurrentSlide(slideNumber)
    }

    const handleSubscription = async () => {
        try {
            const response = await fetch(
                'https://got10in-backend-cfba39007310.herokuapp.com/subscribe/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email }),
                }
            )
            const data = await response.json()
            if (response.ok) {
                alert(data.message)
            } else {
                alert(data.detail) // Display the error message from the backend
            }
        } catch (error) {
            console.error('There was an error!', error)
        }
    }

    return (
        <div className='with-full mx-0 my-auto overflow-hidden'>
            <div className='container-body'>
                <Parallax className='flex-1' speed={-10}>
                    <p className='small-text-yellow'>Are you</p>
                    <div className='slider-container'>
                        <img
                            src={taglines[currentSlide].image}
                            alt={taglines[currentSlide].alt}
                            className='max-w-full object-cover'
                            style={{ marginTop: '1%', marginBottom: '5%' }}
                        />
                        <div className='dots-container'>
                            {taglines.map((_, slideNumber) => (
                                <div
                                    key={slideNumber}
                                    className={`dot ${
                                        currentSlide === slideNumber
                                            ? 'active'
                                            : ''
                                    }`}
                                    onMouseEnter={() =>
                                        handleDotHover(slideNumber)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex gap-4 mt-3/20 mb-1/10 h-10'>
                        <input
                            type='email'
                            className='form-control w-7/10 h-full'
                            placeholder='Enter your email to subscribe!'
                            style={{
                                borderRadius: '50px',
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className='subscribe-button-1'
                            onClick={handleSubscription}
                        >
                            Subscribe
                        </button>
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
            <div className='container-white'>
                <p
                    className='medium-text-blue'
                    style={{
                        marginLeft: '10%',
                        marginTop: '5%',
                        marginBottom: '5%',
                    }}
                >
                    Explore our features
                </p>

                {HOME_CARDS.map((card) => Card(card))}

                <p
                    className='medium-text-blue'
                    style={{ marginLeft: '10%', marginBottom: '5%' }}
                >
                    Hear from our students:
                </p>
                <div className='container-small'>
                    <div className='slider-container-middle'>
                        <img
                            src={testimonials[currentSlide].image}
                            alt={testimonials[currentSlide].alt}
                            className='max-w-full'
                            style={{ marginBottom: '3%' }}
                        />
                        <div className='dots-container'>
                            {testimonials.map((_, slideNumber) => (
                                <div
                                    key={slideNumber}
                                    className={`greydot ${
                                        currentSlide === slideNumber
                                            ? 'active'
                                            : ''
                                    }`}
                                    onMouseEnter={() =>
                                        handleDotHover(slideNumber)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
