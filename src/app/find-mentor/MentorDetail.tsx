'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TbBrandZoom, TbLock } from 'react-icons/tb'
import menteesGotIn from '../../assets/mentor/MenteesGotIn.png'
import mentorpic from '../../assets/mentor/Mentor.png'
import uniLogoCalTech from '../../assets/mentor/UniLogo-CalTech.png'
import uniLgoUCB from '../../assets/mentor/UniLogo-UCB.png'
import mentor1pic from '../../assets/mentor/mentor1.png'
import Page from '../../components/layout/Page.layout'
import { MENTOR_CARDS } from '../../data/mentor/FindMentor.data'
import { MENTOR_CATEGORIES } from '../../data/mentor/MentorCategories'
import { useReduxContext } from '../../utils/hooks/redux.hook'
import { Parallax } from '../../utils/modules/react-scroll-parallax'
import DeptButton from './DeptButton.component'

function MentorDetail() {
    const router = useRouter()

    const [mentor, setMentor] = useState(MENTOR_CARDS[0])

    const mentorId = ''
    const { mobile } = useReduxContext()

    useEffect(() => {
        setMentor(
            MENTOR_CARDS.filter(({ id }) => {
                return id === mentorId
            })[0]
        )
    }, [mentorId])

    const routeChangeToBecomeAMentor = () => {
        let path = '/become-a-mentor'
        router.push(path)
    }

    return (
        <Page
            removeTopMargin
            banner={
                <div className="flex w-full gap-4 items-center mb-8 bg-accent-light pt-10 pb-6 px-3/20">
                    <Parallax
                        speed={mobile ? 0 : 5}
                        className="max-w-[40%] sm:hidden"
                    >
                        <Image src={mentorpic} alt="" />
                    </Parallax>

                    <div className="text-right sm:text-left items-end sm:items-start flex flex-col gap-8">
                        <p className="text-3xl font-bold text-white">
                            <span className="text-accent">
                                Become our mentor
                            </span>
                            , and step out of the frame of time-based salary.
                        </p>

                        <p className="text-white">
                            let us help you automate your consulting service and
                            make your expertise able to help more students as
                            long as gain unlimited benefits.
                        </p>

                        <button
                            onClick={routeChangeToBecomeAMentor}
                            className="px-4 py-2 text-sm text-white font-medium bg-highlight rounded-full"
                        >
                            Become a mentor
                        </button>
                    </div>
                </div>
            }
        >
            <div className="grid grid-cols-2 mb-8">
                <div className="col-span-1 flex items-center space-x-4">
                    <div className="block h-full w-full rounded-lg object-none z-20 bg-white  dark:bg-neutral-700">
                        <div className="flex justify-center -mt-[95px]">
                            <Image
                                src={mentor1pic}
                                className="object-fill rounded-full h-40 w-40  object-[9%_-12px] shadow-lg dark:shadow-black/20"
                                alt="Avatar"
                            />
                        </div>
                    </div>

                    <div className="font-medium space-y-4">
                        <div className="text-2xl">{mentor.name}</div>
                        <div>{mentorId}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Hey, kids. I'm a passionate design mentor. Let me
                            help you get in to your dream school!
                        </div>
                    </div>
                </div>
                <div className="col-span-1 place-items-center">
                    <div className="gap-4 columns-4 mb-4">
                        <div className="text-sm font-medium text-black">
                            <p>AI Char Consulting</p>
                            <p className="text-lg text-sky-900">$ 20/yr</p>
                        </div>
                        <div>
                            <button
                                onClick={routeChangeToBecomeAMentor}
                                className="flex flex-col items-center px-6 py-3 text-md text-white bg-accent-light font-semibold rounded-lg hover:text-white hover:bg-blue-200 hover:border-transparent duration-150"
                            >
                                <TbLock className="block" />
                                <span className="block">Unlock</span>
                            </button>
                        </div>

                        <div className="text-sm font-medium text-black ">
                            <p className="text-sm font-medium  ">
                                1 on 1 Mentor
                            </p>
                            <p className="text-lg font-medium">$ 80/hr</p>
                        </div>
                        <div>
                            <button
                                onClick={routeChangeToBecomeAMentor}
                                className="flex items-center flex-col px-6 py-3 text-md text-white bg-gray-300 font-semibold rounded-lg border-accent hover:text-white hover:bg-yellow-400 hover:border-transparent duration-150"
                            >
                                <TbBrandZoom className="block" />
                                <span className="block min-w-max">
                                    Book Now
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className=" flex text-black items-center space-y-2 whitespace-pre">
                        <div className="flex items-center">
                            <p className="text-sm font-medium ">
                                UC Berkely Alumni{'   '}|{'  '}
                            </p>
                            <svg
                                className="w-4 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>

                            <p className="text-sm font-medium text-black ">
                                4 years in{' '}
                                <span className="text-slate-900">
                                    {' '}
                                    Design Mentor · Product Design{' '}
                                </span>
                            </p>

                            <p className="text-sm font-medium text-black">
                                | 4.3 (211) reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex w-full min-w-max place-items-stretch rounded-md shadow-sm mb-8 "
                role="group"
            >
                <button
                    type="button"
                    className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Mentor Profile
                </button>
                <button
                    type="button"
                    className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Blogs & Posts
                </button>
                <button
                    type="button"
                    className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Reviews
                </button>
            </div>

            <div className="flex flex-row space-x-2 justify-between mb-8">
                <button className="px-4 py-2 text-sm min-w-max text-black bg-accent-light font-semibold rounded-lg border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                    Talks about:
                </button>
                {MENTOR_CATEGORIES.map((category) => (
                    <DeptButton key={category}>{category}</DeptButton>
                ))}
            </div>

            <div className="h-56 w-full p-4 grid grid-flow-row auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md">
                <div className="grid text-xl rounded-md">Mentees got in</div>

                <Image className="flex" src={menteesGotIn} alt="menteesGotIn" />
            </div>

            <div className=" flex flex-col h-fit w-full p-4 auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md">
                <div className="flex text-xl rounded-md">
                    Education Background
                </div>

                <ul className="list-none">
                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={uniLgoUCB}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    University of California, Berkeley
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Master of Fine Arts (MFA), Product Design
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2019 - 2021
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-top: dotted 1px dark:bg-gray-700"></hr>

                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={uniLogoCalTech}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    California Institute of Technology
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Bachelor of Science (BS), Computer Science
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2013 - 2017
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={mentorpic}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Flintridge Preparatory School
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Grade 7-12
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2008 - 2013
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </ul>
            </div>

            <div className=" flex flex-col h-fit w-full p-4 auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md">
                <div className="flex text-xl rounded-md">Work Experience</div>

                <ul className="list-none">
                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={mentorpic}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Product Mangener
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Microsoft
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2022 - now
                            </p>
                            <p className="text-sm text-slate-900 font-medium">
                                Full time
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-top: dotted 1px dark:bg-gray-700"></hr>

                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={mentorpic}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Sr. Product Designer
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Stealth Startup
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2020 - 2022
                            </p>
                            <p className="text-sm text-slate-900 font-medium">
                                Full time
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <li className="flex flex-row space-x-2 justify-between">
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <Image
                                className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0"
                                src={mentorpic}
                                alt="mentor1pic"
                            />
                            <div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Product Designer
                                </p>
                                <p className="text-sm text-slate-900 font-normal">
                                    Stealth Startup
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-right mr-4">
                            <p className="text-xs text-slate-900 font-normal">
                                2018 - 2020
                            </p>
                            <p className="text-sm text-slate-900 font-medium">
                                Full time
                            </p>
                        </div>
                    </li>
                    <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </ul>
            </div>
        </Page>
    )
}

export default MentorDetail
