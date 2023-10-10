import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import './Home.css'
import Card from './Card'
import { HOME_CARDS } from '../../data/home/Home.data'
import { IconBase } from 'react-icons'

function Home() {
    const [email, setEmail] = useState('')
    const [currentSlide, setCurrentSlide] = useState(1) // 追踪当前图片编号
    const totalSlides = 3 // 总共的图片数量

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === totalSlides ? 1 : prevSlide + 1
            )
            // 更新圆点
            handleDotHover(currentSlide === totalSlides ? 1 : currentSlide + 1)
        }, 3000) // 5秒自动切换

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
                <Parallax className='text' speed={-10}>
                    <p className='small-text-yellow'>Are you</p>
                    <div className='slider-container'>
                        <img
                            src={`/Q${currentSlide}.png`}
                            alt={`Word${currentSlide}`}
                            className='WordCard2'
                            style={{ marginTop: '1%', marginBottom: '5%' }}
                        />
                        <div className='dots-container'>
                            {[1, 2, 3].map((slideNumber) => (
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
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div
                        className='flex gap-4'
                        style={{
                            paddingTop: '15%',
                            paddingBottom: '10%',
                        }}
                    >
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Enter your email to subscribe!'
                            style={{
                                borderRadius: '50px',
                                width: '70%',
                                height: '40px',
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className='subscribe-button-1'
                            style={{ height: '40px' }}
                            onClick={handleSubscription}
                        >
                            Subscribe
                        </button>
                    </div>
                </Parallax>
                <div className='text'>
                    <Parallax speed={-10}>
                        <img src='/logo2.png' alt='Logo' className='WordCard' />
                    </Parallax>
                    <img
                        src='/Rocket.png'
                        alt='Rocket'
                        className='WordCard'
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
                    {/* 底部图片切换 */}
                    <div className='slider-container-middle'>
                        <img
                            src={`/StudentSay${currentSlide}.png`}
                            alt={`StudentSay${currentSlide}`}
                            className='WordCard'
                            style={{ marginBottom: '3%' }}
                        />
                        <div className='dots-container'>
                            {[1, 2, 3].map((slideNumber) => (
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
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
