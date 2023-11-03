import { BiSolidChevronRight } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import MyRankingDemo from '../../assets/myCollegeRanking/MyRanking.png'
import Page from '../../components/layout/Page.layout'
import { Button } from '../../components/buttons/Button'

const MyCollegeRanking = () => {
    const navigate = useNavigate()
    return (
        <Page className='!flex-row'>
            <Parallax speed={5} className='basis-1/2'>
                <img
                    src={MyRankingDemo}
                    alt=''
                    className='pointer-events-none w-full max-w-lg'
                    style={{ paddingRight: '100px' }}
                />
            </Parallax>

            <div className='basis-1/2 flex flex-col items-end sm:items-start'>
                <p className='text-3xl text-accent font-bold'>
                    Welcome to My College Ranking!
                </p>
                <div className='flex flex-row gap-2'>
                    <span className='text-sm bg-accent text-white px-2 py-1 mt-2 rounded-lg max-w-fit'>
                        Personalized 🫡
                    </span>
                    <span className='text-sm bg-highlight text-white px-2 py-1 mt-2 rounded-lg max-w-fit'>
                        Free 🥳
                    </span>
                </div>
                <p className='font-light text-right sm:text-left mt-8'>
                    Here, we invite you to complete a brief{' '}
                    <span className='font-semibold text-accent'>
                        1-3 minute
                    </span>{' '}
                    quiz. Within this quiz, you'll be inquired about your MBTI,
                    academic history, extracurricular passions, financial
                    status, and various other college selection preferences.
                    Subsequently, we will craft a personalized college ranking
                    list complete with a detailed comparison of the factors that
                    matter most to you.
                </p>
                <p className='font-light text-sm text-text text-right sm:text-left mt-2 sm:mt-4'>
                    *Keep in mind, the result is completely free. We'd love for
                    you to create an account with us, but it is entirely
                    optional. Feel free to skip anything you don't want to share
                    too!
                </p>
                <Button
                    onClick={() => {
                        navigate('/question')
                    }}
                    className='mt-12'
                >
                    Get started <BiSolidChevronRight className='inline-block' />
                </Button>
            </div>
        </Page>
    )
}

export default MyCollegeRanking
