import { ICard } from '../../pages/home/Card.component'
import Landing1 from '../../assets/home/Landing1.png'
import Landing2 from '../../assets/home/Landing2.png'
import Landing3 from '../../assets/home/Landing3.png'
import Tagline0 from '../../assets/home/Tagline0.png'
import Tagline1 from '../../assets/home/Tagline1.png'
import Tagline2 from '../../assets/home/Tagline2.png'
import Testimonial0 from '../../assets/home/Testimonial0.png'
import Testimonial1 from '../../assets/home/Testimonial1.png'
import Testimonial2 from '../../assets/home/Testimonial2.png'
import { Link } from 'react-router-dom'
import { WishlistButton } from '../../components/functional/WishlistButton'

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
                className='bg-highlight text-lg font-extrabold text-white rounded-full px-6 py-3 text-center cursor-pinter no-underline mt-12 inline-block'
            >
                Try My College Ranking
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
        button: WishlistButton,
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
        button: WishlistButton,
    },
]

export const taglines: { image: string; alt: string }[] = [
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

export const testimonials: { image: string; alt: string }[] = [
    { image: Testimonial0, alt: 'testimonial' },
    { image: Testimonial1, alt: 'testimonial' },
    { image: Testimonial2, alt: 'testimonial' },
]