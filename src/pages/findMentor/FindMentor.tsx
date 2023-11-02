import { useEffect, useState } from 'react'
import { IoArrowDownCircle, IoOptions } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import mentorBanner from '../../assets/mentor/Mentor.png'
import Page from '../../components/layout/Page.layout'
import { MENTOR_CARDS } from '../../data/mentor/FindMentor.data'
import { MENTOR_CATEGORIES } from '../../data/mentor/MentorCategories'
import DeptButton from './DeptButton.component'
import MentorCard from './MentorCard.component'
import { OverallDropDown } from './OverallDropDown.component'

function FindMentor() {
    const navigate = useNavigate()

    // search-bar related props
    const [query, setQuery] = useState('')

    // filter-bar related props
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const routeChangeToBecomeAMentor = () => {
        navigate('/become-a-mentor')
    }

    const handleDropDown = () => {
        setDropdownOpen((state) => !state)
    }

    const [selectedCategory, setSelectedCategory] = useState('All')
    const [categoriesExpanded, setCategoriesExpanded] = useState(false)

    const [filteredMentors, setFilteredMentors] = useState(MENTOR_CARDS)

    useEffect(() => {
        setFilteredMentors(
            MENTOR_CARDS.filter((mentor) => {
                return true
            })
        )
    }, [query, selectedCategory])

    return (
        <Page
            removeTopMargin
            banner={
                <div className='flex w-full gap-4 items-center mb-8 bg-accent-light pt-10 pb-6 px-3/20'>
                    <Parallax speed={5} className='max-w-[40%] sm:hidden'>
                        <img src={mentorBanner} alt='' />
                    </Parallax>

                    <div className='text-right sm:text-left items-end sm:items-start flex flex-col gap-8'>
                        <p className='text-3xl font-bold text-white'>
                            <span className='text-accent'>
                                Become our mentor
                            </span>
                            , and step out of the frame of time-based salary.
                        </p>

                        <p className='text-white'>
                            let us help you automate your consulting service and
                            make your expertise able to help more students as
                            long as gain unlimited benefits.
                        </p>

                        <button
                            onClick={routeChangeToBecomeAMentor}
                            className='px-4 py-2 text-sm text-white font-medium bg-highlight rounded-full'
                        >
                            Become a mentor
                        </button>
                    </div>
                </div>
            }
        >
            <div className='flex place-items-center gap-8 w-full mb-8 justify-center'>
                <button className='px-4 py-2 text-white font-medium bg-accent rounded-full'>
                    Match me a mentor
                </button>
                <span className='text-xl font-poppins'>or</span>
                <div className='grow flex items-center gap-4 max-w-md'>
                    <input
                        type='filter'
                        className='grow h-10 py-2 px-4 text-md border border-gray-300 rounded-full bg-gray-50 '
                        placeholder='Start your own search here...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={() => {}}
                    />
                    <button
                        className='rounded-full p-2 bg-white text-accent drop-shadow-standard duration-150 hover:bg-accent hover:text-white'
                        onClick={handleDropDown}
                    >
                        <IoOptions className='h-6 w-6 p-0.5' />
                    </button>
                </div>
            </div>

            {dropdownOpen && <OverallDropDown />}

            <div className='flex flex-row mb-8 max-w-full gap-2'>
                <div
                    className={`flex flex-row gap-2 overflow-x-auto drop-shadow-categories scrollbar-hidden ${
                        categoriesExpanded && 'flex-wrap'
                    }`}
                >
                    <DeptButton
                        selected={selectedCategory === ''}
                        onClick={() => {
                            setSelectedCategory('')
                        }}
                    >
                        All
                    </DeptButton>
                    {MENTOR_CATEGORIES.map((category) => {
                        const selected = category === selectedCategory
                        return (
                            <DeptButton
                                key={category}
                                selected={selected}
                                onClick={() => {
                                    setSelectedCategory(
                                        selected ? '' : category
                                    )
                                }}
                            >
                                {category}
                            </DeptButton>
                        )
                    })}
                </div>
                <div
                    className='p-2 cursor-pointer rounded-full hover:shadow-categories h-fit'
                    onClick={() => {
                        setCategoriesExpanded((state) => !state)
                    }}
                >
                    <IoArrowDownCircle
                        className={`w-6 h-6 will-change-transform transition-transform ease-out ${
                            categoriesExpanded && 'rotate-180'
                        }`}
                    />
                </div>
            </div>

            <div className='grid grid-cols-2 grid-flow-row justify-between gap-1/20 sm:grid-cols-1'>
                {MENTOR_CARDS.map((mentor) => (
                    <MentorCard key={mentor.id} {...mentor} />
                ))}
            </div>

            <div className='flex justify-between bottom-1/20 relative h-32 w-32'>
                <div className='absolute inset-x-0 bottom-0 h-16'>
                    <button
                        onClick={routeChangeToBecomeAMentor}
                        className='px-6 py-3 text-md text-accent-light font-semibold rounded-full border border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
                    >
                        Load more
                    </button>
                </div>
            </div>
        </Page>
    )
}

export default FindMentor
