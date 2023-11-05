'use client'

import { useEffect } from 'react'
import { FaDiscord, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

import Logo from '../../../assets/myCollegeRanking/result/Logo.svg'
import Arrow from '../../../assets/myCollegeRanking/result/arrow.svg'
import Crown from '../../../assets/myCollegeRanking/result/crown.svg'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
    DiscordInvitation,
    LinkedInLink,
    WishListForm,
    XLink
} from '../../../utils/constants/links'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux.hook'
import { updateState } from '../../../utils/redux/collegeRanking'
import { resetAll } from '../../../utils/redux/questionnaire'

const Result = () => {
    const rankings = useAppSelector((state) => state.collegeRanking.value)

    const router = useRouter()

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
                router.push('/my-college-ranking')
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
    }, [dispatch, rankings.length, router])

    return (
        <div className="bg-white mt-40 sm:mt-0 w-full px-36 py-12 sm:px-8 relative">
            <div className="flex flex-row justify-between gap-12 sm:flex-wrap">
                <Image
                    src={Logo}
                    alt=""
                    className="-translate-y-12 sm:translate-y-0 sm:w-1/2"
                />

                <div className="relative font-poppins mb-12 text-right">
                    <p className="text-2xl text-text-dark font-medium sm:text-lg sm:text-right">
                        Hey{' '}
                        <span className="text-highlight text-4xl font-bold sm:text-lg">
                            Applicant
                        </span>
                        , here are the Top 10 colleges tailored just for you!
                    </p>
                    {/* <p className='font-medium sm:hidden'>
                        *
                        <span
                            className='text-highlight underline cursor-pointer'
                            onClick={() => {
                                router.push('/login-signup')
                            }}
                        >
                            Signup or Login
                        </span>{' '}
                        to unlock your top 10 to 30!
                    </p> */}
                    <Image
                        src={Arrow}
                        alt=""
                        className="absolute right-0 -bottom-20 sm:top-16"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-16 sm:gap-6 mt-12 sm:grid-cols-1">
                <div
                    id="top-3"
                    className="flex flex-col gap-8 sm:gap-4 h-full justify-between items-center"
                >
                    {rankings.slice(0, 3).map((school, index) => {
                        return (
                            <div
                                key={index}
                                className="relative drop-shadow-standard w-full max-w-md min-h-[8rem] sm:min-h-[5rem] h-fit bg-accent text-white rounded-[1.7rem] flex items-center justify-start gap-4 px-4"
                            >
                                {index === 0 && (
                                    <Image
                                        src={Crown}
                                        alt=""
                                        className="absolute -top-8 -right-8"
                                    />
                                )}
                                <span
                                    className={`${
                                        index === 0
                                            ? 'bg-highlight'
                                            : index === 1
                                            ? 'bg-silver'
                                            : 'bg-bronze'
                                    } rounded-full w-8 h-8 flex items-center justify-center flex-none shrink-0`}
                                >
                                    <p className="block w-fit h-fit m-0 font-bold">
                                        {index + 1}
                                    </p>
                                </span>
                                <p className="block m-0 text-2xl font-bold sm:text-2xl">
                                    {school}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div
                    id="top-10"
                    className="flex flex-col gap-3 h-full justify-between items-center"
                >
                    {rankings.slice(3).map((school, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full max-w-md drop-shadow-standard min-h-[3rem] h-fit bg-accent text-white rounded-xl flex items-center justify-start gap-4 px-4"
                            >
                                <span className="bg-highlight rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                                    <p className="block w-fit h-fit m-0 font-bold">
                                        {index + 4}
                                    </p>
                                </span>
                                <p className="block m-0">{school}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex mx-auto max-w-lg items-center justify-center flex-col gap-4 text-center">
                <button
                    className="bg-text text-sm font-extrabold text-white rounded-full w-full px-6 py-3 text-center cursor-pinter no-underline mt-12 inline-block"
                    onClick={() => {
                        router.push('/login-signup')
                    }}
                >
                    Log in or sign Up to load your top 10 to 30
                </button>
                <p className="font-medium">
                    Changed your mind? You can always{' '}
                    <button
                        className="underline text-highlight"
                        onClick={() => {
                            dispatch(resetAll())
                            router.push('/my-college-ranking')
                        }}
                    >
                        redo the test
                    </button>
                </p>

                <p className="mb-2 italic my-4">
                    Interested in talking to our AI-empowered mentors about how
                    they got into those schools?{' '}
                    <button
                        className="underline text-highlight"
                        onClick={() => {
                            window.location.href = WishListForm
                        }}
                    >
                        Join the wishlist
                    </button>{' '}
                    to be notified when the feature launches!
                </p>

                <div className="w-full max-w-sm flex justify-between font-medium mt-2 px-2 basis-1/2 flex-wrap">
                    <p className="min-w-max">Share your ranking result to:</p>
                    <ul className="flex gap-2 text-highlight [&>*]:cursor-pointer">
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
            </div>
        </div>
    )
}

export default Result
