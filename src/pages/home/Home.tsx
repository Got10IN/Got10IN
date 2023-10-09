import './Home.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        <div className='home'>
            <div className='container-body'>
                <div className='text'>
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
                    {/* <p className="medium-text">overwhelmed by those crazy<br></br>ranks of national colleges?</p> */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '5%',
                            paddingTop: '15%',
                            paddingBottom: '10%',
                        }}
                    >
                        <input
                            type='email'
                            className='form-control'
                            placeholder='  Please enter your email'
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
                </div>
                <div className='text'>
                    <img src='/logo2.png' alt='Logo' className='WordCard' />
                    {/* <p className="small-text-white">Your AI empowered college application assistant is here to help!</p> */}
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
                <div className='container-small'>
                    <img
                        src='/LandingPic1.png'
                        alt='Logo'
                        className='image-blue'
                        style={{ paddingRight: '10%' }}
                    />
                    <div className='text-body'>
                        <p className='medium-text-blue'>
                            We provide you with a personalized college ranking
                        </p>
                        <img
                            src='/Word1-1.png'
                            alt='Word1-1'
                            className='WordCard'
                        />
                        <Link
                            to='/my-college-ranking'
                            className='subscribe-button'
                            style={{ marginTop: '50px' }}
                        >
                            Try My College Rank
                        </Link>
                    </div>
                </div>
                <div className='container-small'>
                    <div className='text-body'>
                        <p className='medium-text-blue'>
                            We get you the best peer & professional mentors
                            around the clock
                        </p>
                        <img
                            src='/Word1-2.png'
                            alt='Word1-2'
                            className='WordCard'
                        />
                        <a
                            href='https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='subscribe-button'
                            style={{ marginTop: '50px' }}
                        >
                            Join wishlist
                        </a>
                    </div>
                    <img
                        src='/LandingPic2.png'
                        alt='Logo'
                        className='image-blue'
                        style={{ paddingLeft: '10%' }}
                    />
                </div>
                <div className='container-small'>
                    <img
                        src='/LandingPic3.png'
                        alt='Logo'
                        className='image-blue'
                        style={{ paddingRight: '10%' }}
                    />
                    <div className='text-body'>
                        <p className='medium-text-blue'>
                            We help you plan your university application
                        </p>
                        <img
                            src='/Word1-3.png'
                            alt='Word1-3'
                            className='WordCard'
                        />
                        <a
                            href='https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='subscribe-button'
                            style={{ marginTop: '50px' }}
                        >
                            Join wishlist
                        </a>
                    </div>
                </div>
                <p
                    className='medium-text-blue'
                    style={{ marginLeft: '10%', marginBottom: '5%' }}
                >
                    Our students say
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