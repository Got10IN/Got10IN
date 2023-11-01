import { BiSolidChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import MyRankingDemo from '../../assets/myCollegeRanking/MyRanking.png'
import Page from '../../components/layout/Page.layout'

function MyCollegeRanking() {
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
                <span className='text-sm bg-highlight text-white px-2 py-1 mt-2 rounded-lg max-w-fit'>
                    Free 🥳
                </span>
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
                <Link
                    to='/question'
                    className='text-lg font-extrabold text-white rounded-full px-1/20 py-3 text-center cursor-pinter no-underline inline-block min-w-max bg-highlight align-middle'
                    style={{ marginTop: '20%', width: '350px' }}
                >
                    Get started <BiSolidChevronRight className='inline-block' />
                </Link>
            </div>
        </Page>
    )
}

export default MyCollegeRanking
