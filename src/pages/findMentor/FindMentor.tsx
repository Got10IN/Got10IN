import React from 'react'
import './FindMentor.css'
import { Parallax } from 'react-scroll-parallax'
import FindMentorDemo from '../../assets/mentor/Mentor.png'

function FindMentor() {
    return (
        <div className='flex h-auto w-full bg-white'>
            <div className='flex px-[10%] pt-[15%] pb-[10%] flex-row items-center'>
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
                    <a
                        href='https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='subscribe-button'
                        style={{ marginTop: '15%', width: '350px' }}
                    >
                        Join wishlist
                    </a>
                </div>
            </div>
        </div>
        // <div className="mentor-fullscreen-container">
        //     <div className="mentor-center-content">
        //         <img src="/Mentor.png" alt="Mentor" className="image-blue" style={{paddingRight:'100px'}}/>
        //         <div className="text-body-right">
        //             <img src="/MentorWords.png" alt="MentorWords" className="WordCard"/>
        //
        //         </div>
        //     </div>
        // </div>
    )
}

export default FindMentor
