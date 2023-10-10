import { ICard } from '../../pages/home/Card'
import Landing1 from '../../assets/home/Landing1.png'
import Landing2 from '../../assets/home/Landing2.png'
import Landing3 from '../../assets/home/Landing3.png'
import { Link } from 'react-router-dom'

export const HOME_CARDS: ICard[] = [
    {
        title: 'We provide you with a personalized college ranking',
        description: () => (
            <p className='font-light'>
                Through a 1-3 minute short quiz, we'll generate a best-fitting
                college rankings list just for you. It can be based on your
                MBTI, academic background, extracurricular interests, financial
                situation, and your many other preferences.
                <br />
                <span className='font-bold text-accent'>
                    The best fit is the best rank!
                </span>
            </p>
        ),
        image: Landing1,
        button: () => (
            <Link
                to='/my-college-ranking'
                className='subscribe-button'
                style={{ marginTop: '50px' }}
            >
                Try My College Rank
            </Link>
        ),
    },
    {
        title: 'We get you the best peer & professional mentors around the clock',
        description: () => (
            <p className='font-light'>
                No more appointments! we've set up AI agents for every mentor.
                This means students and alumni from your dream school can{' '}
                <span className='text-accent font-bold'>
                    seamlessly share their experiences and insights with you
                    24/7
                </span>
                . And definitely, we also offer 1-on-1 real person mentorship
                whenever you need it.
            </p>
        ),
        image: Landing2,
        button: () => (
            <a
                href='https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                className='subscribe-button'
                style={{ marginTop: '50px' }}
            >
                Join wishlist
            </a>
        ),
        reverse: true,
    },
    {
        title: 'We help you plan your university application',
        description: () => (
            <p className='font-light'>
                No more confusion! We'll create a tailored application
                to-do-list based on your personal college rankings. With our
                meticulous planning and guidance, your university application
                will reach new levels of success!
            </p>
        ),
        image: Landing3,
        button: () => (
            <a
                href='https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                className='subscribe-button'
                style={{ marginTop: '50px' }}
            >
                Join wishlist
            </a>
        ),
    },
]
