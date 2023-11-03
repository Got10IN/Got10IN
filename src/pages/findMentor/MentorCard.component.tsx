import { Link } from 'react-router-dom'

export interface IMentorCard {
    id: string
    daysJoined: number
    name: string
    alumni: string
    rating: number
    ratingQuantity: number
    yearsOfExperience: number
    topic1: string
    topic2: string
    aiChattingPrice: number
    totalSubscriber: number
    oneOnonePrice: number
    totalHour: number
    mentorPic: string
    reverse?: boolean
}

const MentorCard = ({
    id,
    daysJoined,
    name,
    alumni,
    rating,
    ratingQuantity,
    yearsOfExperience,
    topic1,
    topic2,
    aiChattingPrice,
    totalSubscriber,
    oneOnonePrice,
    totalHour,
    mentorPic,
}: IMentorCard) => {
    return (
        <div className='basis-1/2 h-fit bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8'>
            <div className='lg:flex md:flex sm:flex'>
                <div className='shrink-0'>
                    <img
                        className='w-16 md:w-32 lg:w-48 h:full'
                        src={mentorPic}
                        alt='mentorpic'
                    />
                </div>
                <div className='container mx-auto px-4 text-center mt-2 sm:text-left md:text-left whitespace-pre'>
                    <div className='text-xs text-slate-500 mb-4 text-clip overflow-hidden'>
                        {daysJoined} days{'  '}
                        <span className='text-2xl text-black font-semibold display:inline '>
                            {name}
                        </span>
                        {'  '}has joined
                    </div>
                    <div className='text-sm font-medium text-slate-700 mb-4 space-y-2'>
                        <div className='flex items-center'>
                            <p className='text-clip overflow-hidden'>
                                {alumni}
                                {'   '}|{'  '}
                            </p>
                            <svg
                                className='w-4 h-4 text-yellow-300 mr-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                            >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                            <p>
                                {rating}{' '}
                                <span className='text-slate-500'>
                                    ({ratingQuantity})
                                </span>{' '}
                                reviews
                            </p>
                        </div>

                        <div>
                            {yearsOfExperience} years in{' '}
                            <span className='font-semibold'>
                                {' '}
                                {topic1} · {topic2}{' '}
                            </span>
                        </div>
                    </div>
                    <div className='text-sm font-normal text-black mb-4 space-y-1'>
                        <p className='text-left'>Mentees got in</p>
                        <div className='flex flex-row items-center'>
                            <span className='rounded-full bg-slate-100 px-4 py-2 text-slate-700 break-after-column'>
                                UC Berkeley x12
                            </span>
                            <span className='rounded-full bg-slate-100 px-4 py-2 text-slate-700 break-after-column'>
                                Standford x5
                            </span>
                            <span className='rounded-full bg-slate-100 px-4 py-2 text-slate-700 break-after-column'>
                                +3
                            </span>
                        </div>
                    </div>
                    <div className='columns-2 gap-8 mb-2.5'>
                        <div className='text-sm text-black space-y-1'>
                            <p className='text-sm font-medium '>
                                AI Char Consulting
                            </p>
                            <p className='text-lg font-semibold text-sky-900'>
                                $ {aiChattingPrice}/yr
                            </p>
                            <p className='text-sm font-normal '>
                                Total subscriber{' '}
                                <span className='text-xs text-indigo-300'>
                                    {' '}
                                    {totalSubscriber} +{' '}
                                </span>
                            </p>
                        </div>
                        <div className='text-sm text-black space-y-1'>
                            <p className='text-sm font-medium '>
                                1 on 1 Mentor
                            </p>
                            <p className='text-lg font-semibold  text-sky-900'>
                                $ {oneOnonePrice}/hr
                            </p>
                            <p className='text-sm font-normal'>
                                Total hour{' '}
                                <span className='text-xs text-indigo-300'>
                                    {' '}
                                    {totalHour} hr
                                </span>
                            </p>
                        </div>
                    </div>
                    <Link
                        to={`/mentor-detail/${id}`}
                        className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MentorCard
