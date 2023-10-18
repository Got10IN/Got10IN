import { useEffect } from 'react'
import { FaDiscord, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import QRCode from 'react-qr-code'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/myCollegeRanking/result/LogoWithRankingTagline.svg'
import Arrow from '../../../assets/myCollegeRanking/result/arrow.svg'
import Crown from '../../../assets/myCollegeRanking/result/crown.svg'
import {
    CollegeRankingPage,
    DiscordInvitation,
    LinkedInLink,
    XLink,
} from '../../../utils/constants/links'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux.hook'
import { resetAll } from '../../../utils/redux/questionnaire'
import { updateState } from '../../../utils/redux/collegeRanking'

const Result = () => {
    const rankings = useAppSelector((state) => state.collegeRanking.value)

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    useEffect(() => {
        try {
            const raw = localStorage.getItem('rankings')
            console.log(raw)
            if (raw) {
                const data = JSON.parse(raw)

                if (Array.isArray(data)) {
                    dispatch(updateState(data))
                } else {
                    throw new TypeError('Wrong data type stored')
                }
            } else if (rankings.length === 0) {
                navigate('/my-college-ranking')
            }
        } catch (e) {
            if (e instanceof TypeError) {
                try {
                    localStorage.removeItem('rankings')
                } catch {}
            } else {
                console.log('unknown error occurred')
            }
        }
    }, [])

    return (
        <div className='bg-white mt-40 sm:mt-0 w-full px-36 py-12 sm:px-8 relative'>
            <div className='absolute hidden sm:flex flex-col'>
                <QRCode
                    value={CollegeRankingPage}
                    size={100}
                    fgColor='#003362'
                    className='mx-2.5'
                />
                <span className='text-sm text-text text-center block w-[120px]'>
                    Share the quiz with your friends!
                </span>
            </div>
            <div className='relative w-full font-poppins mb-12'>
                <p className='text-3xl text-text-dark font-medium sm:text-lg sm:font-bold sm:text-right sm:ml-2/5 sm:w-3/5'>
                    Hey{' '}
                    <span className='text-highlight text-4xl font-bold sm:text-lg'>
                        Applicant
                    </span>
                    , here are the top 10 colleges tailored just for you!
                </p>
                <p className='text-xl font-medium sm:hidden'>
                    *
                    <span
                        className='text-highlight underline cursor-pointer'
                        onClick={() => {
                            navigate('/login-signup')
                        }}
                    >
                        Signup or Login
                    </span>{' '}
                    to unlock the detail Index comparison of your ranking
                    results
                </p>
                <img
                    src={Arrow}
                    alt=''
                    className='absolute right-0 top-12 sm:top-16'
                />
            </div>
            <div className='grid grid-cols-2 gap-16 sm:gap-8 mt-12 sm:grid-cols-1 sm:mt-20'>
                <div className='flex flex-col gap-8 sm:gap-4'>
                    {rankings.slice(0, 3).map((school, index) => {
                        return (
                            <div
                                key={index}
                                className='relative drop-shadow-standard w-full h-36 sm:h-20 bg-accent text-white rounded-[1.7rem] flex items-center justify-start gap-4 px-4'
                            >
                                {index === 0 && (
                                    <img
                                        src={Crown}
                                        alt=''
                                        className='absolute -top-8 -right-8'
                                    />
                                )}
                                <span
                                    className={`${
                                        index === 0
                                            ? 'bg-highlight'
                                            : index === 1
                                            ? 'bg-silver'
                                            : 'bg-bronze'
                                    } rounded-full w-8 h-8 flex items-center justify-center flex-none`}
                                >
                                    <p className='block w-fit h-fit m-0 font-bold'>
                                        {index + 1}
                                    </p>
                                </span>
                                <p className='block m-0 text-3xl font-bold sm:text-2xl'>
                                    {school}
                                </p>
                            </div>
                        )
                    })}
                    <img
                        src={Logo}
                        alt='The result is generated based on your personal preference'
                        className='sm:hidden'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    {rankings.slice(3).map((school, index) => {
                        return (
                            <div
                                key={index}
                                className='w-full drop-shadow-standard h-10 bg-accent text-white rounded-lg flex items-center justify-start gap-4 px-4'
                            >
                                <span className='bg-highlight rounded-full w-6 h-6 flex items-center justify-center'>
                                    <p className='block w-fit h-fit m-0 font-bold'>
                                        {index + 4}
                                    </p>
                                </span>
                                <p className='block m-0'>{school}</p>
                            </div>
                        )
                    })}
                    <button
                        className='bg-highlight text-sm font-extrabold text-white rounded-full px-6 py-3 text-center cursor-pinter no-underline mt-12 inline-block'
                        onClick={() => {
                            dispatch(resetAll())
                            navigate('/my-college-ranking')
                        }}
                    >
                        Redo the Test
                    </button>
                    <div className='flex justify-between sm:flex-col sm:gap-4 sm:justify-normal text-xl mt-2 px-2'>
                        Share you rankings to:
                        <ul className='flex gap-2 text-highlight [&>*]:cursor-pointer'>
                            <FaDiscord
                                onClick={() => {
                                    window.location.href = DiscordInvitation
                                }}
                            />
                            <FaSquareXTwitter
                                onClick={() => {
                                    window.location.href = XLink
                                }}
                            />
                            <FaLinkedin
                                onClick={() => {
                                    window.location.href = LinkedInLink
                                }}
                            />
                        </ul>
                    </div>
                    <div className='w-full flex justify-end gap-4 px-2 sm:hidden'>
                        <div className='flex justify-end flex-col gap-2'>
                            <QRCode
                                value={CollegeRankingPage}
                                size={100}
                                fgColor='#003362'
                                className='ml-auto'
                            />
                            <span className='text-sm text-text block'>
                                Share the quiz with your friends!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
