import React from 'react'
import './FindMentor.css'
import { Parallax } from 'react-scroll-parallax'
import FindMentorDemo from '../../assets/mentor/Mentor.png'
import { WishlistButton } from '../../components/functional/WishlistButton'

function FindMentor() {
    return (
        <div className='flex h-auto w-full bg-white'>
            <div className='flex px-1/10 pt-3/20 pb-1/10 flex-row items-center'>
                <Parallax speed={5} className='basis-1/2'>
                    <img
                        src={FindMentorDemo}
                        alt=''
                        className='pointer-events-none w-full'
                        style={{ paddingRight: '100px' }}
                    />
                </Parallax>

                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-3xl text-accent font-bold'>
                        Stay tuned, feature is coming soon!
                    </p>
                    <p className='font-light text-right mt-8'>
                        No more appointments! we've set up AI agents for every
                        mentor. This means students and alumni from your dream
                        school can{' '}
                        <span className='font-semibold text-accent'>
                            seamlessly share their experiences and insights with
                            you 24/7
                        </span>
                        . And definitely, we also offer 1-on-1 real person
                        mentorship whenever you need it.
                    </p>
                    <WishlistButton />
                </div>
            </div>
        </div>
    )
}

export default FindMentor
