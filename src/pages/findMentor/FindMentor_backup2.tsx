import React, { Fragment, ReactNode, useState, useEffect } from 'react'
import {render} from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Dot, DotsContainer, SliderContainer } from '../home/Slider.component'

import './FindMentor.css'
import Page from '../../components/layout/Page.layout'
import mentorpic from '../../assets/mentor/Mentor.png'
import { Button } from '../../components/buttons/Button'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import DeptButton from './DeptButton.component'
import { LoadMoreArrow } from './LoadMoreArrow.component'
import { OverallDropDown } from './OverallDropDown.component'
import MentorCard from './MentorCard.component'
import { MENTOR_CARDS } from '../../data/mentor/FindMentor.data'
import { HOME_CARDS } from '../../data/home/Home.data'


class Input extends React.Component {
    _handleKeyDown = (e: { key: string }) => {
      if (e.key === 'Enter') {
        console.log('do validate');
      }
    }
  
    render() {
      return <input type="text" onKeyDown={this._handleKeyDown} />
    }
}


function FindMentor() {
    const [searchMentor, setSearchMentor] = useState('')
    const [talkToMentor, setTalkToMentor] = useState('')
    const [isOpen, setOpen] = useState(false);
  
    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const handleSearchMentor = async () => {
        try {
            const response = await fetch(
                'https://got10in-backend-cfba39007310.herokuapp.com/findAmentor/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ keyword: searchMentor }),
                }
            )
            const data = await response.json()
            if (response.ok) {
                alert(
                    'These are the mentors based on your keywords'
                )
            } else {
                alert(
                    'An unknown issue has occurred! So sorry about this. If you want, contact us through any method and ask to be added to the list.'
                )
            }
        } catch (error) {}
    }
    const handleTalkToMentor = async () => {
        try {
            const response = await fetch(
                'https://got10in-backend-cfba39007310.herokuapp.com/findAmentor/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ keyword: searchMentor }),
                }
            )
            const data = await response.json()
            if (response.ok) {
                alert(
                    'These are the mentors based on your keywords'
                )
            } else {
                alert(
                    'An unknown issue has occurred! So sorry about this. If you want, contact us through any method and ask to be added to the list.'
                )
            }
        } catch (error) {}

        
    }

    return (  
        <Page className='flex-col items-start'>   
            <div className='absolute h-80 w-full bg-accent-light top-1/10'/>
            
            <div className='flex relative h-64 w-full z-10 space-y-8'>
                <div >
                    <div className="lg:flex items-center">
                        <div className='shrink-0'>
                            <img className="h-48 w-64 mt-4 md:mt-8 ml-40" 
                            src={mentorpic} 
                            alt="mentor pic"
                            />
                        </div>
                        <div className="container mx-auto overflow-hidden text-center space-y-4 sm:text-left items-center">
                            <p className="text-2xl text-blue space-y-4 break-words">
                                Become our mentor
                                <span className=" inline text-2xl text-white font-semibold break-words">
                                    , and step out of the frame of time-based salary.
                                </span>
                            </p>

                            <div className=" flex text-sm text-white space-y-1 break-words ">
                                let us help you automate your consulting service 
                                and make your expertise able to help more students 
                                as long as gain unlimited benefits.
                            </div>
        
                            <button className="px-4 py-2 text-sm text-white font-semibold bg-amber-500 rounded-full border border-amber-500 hover:text-blue hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                Become a mentor
                            </button>                                                                               
                        </div>
                    </div>   
                </div>
            </div>

            
    
            
            <div className='flex w-full gap-8 mb-8 relative'>
                <div className="flex place-items-center gap-8 w-full">
                    <div className='min-w-max text-lg font-semibold text-black '>
                        Find a mentor
                    </div>
                    <input
                        type='filter'
                        className='grow h-10 p-2 text-md text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Please enter keywords'
                        value={searchMentor}
                        onChange={(e) => setSearchMentor(e.target.value)}
                        onKeyDown={handleSearchMentor}
                    />
                    
                    <span className='text-md font-semibold text-black '>
                        or
                    </span>
                    <button
                        className="px-4 py-2 text-md text-white font-semibold bg-accent rounded-full border border-purple-200 hover:text-white hover:bg-dark-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"                                                                            
                        onClick={handleSearchMentor}
                    >
                        Match me a mentor
                    </button>

                </div>
                
                <button
                className="text-black  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
                onClick={handleDropDown}
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    

                </button>
                
            </div> 
            

            {isOpen ?  <OverallDropDown/>: null}
            
            <div className='flex flex-row-3 justify-between mb-8'>

                <DeptButton title='All' />
                <DeptButton title='Computer Science' />
                <DeptButton title='HCI' />
                <DeptButton title='Economy' />
                <DeptButton title='Biology' />
                <DeptButton title='Data Science' />
                <DeptButton title='Education' />
                <DeptButton title='Electronic Engineer' />
                <DeptButton title='Architecture' />
                <DeptButton title='Information' />
                <LoadMoreArrow/>
                

            </div>

            

            
            <div className='grid grid-cols-2 grid-flow-row justify-between gap-1/20 sm:grid-cols-1'>
                
                {MENTOR_CARDS.map(({id,daysJoined, name, alumni, 
                    rating, ratingQuantity, yearsOfExperience,topic1, topic2, 
                    aiChattingPrice, totalSubscriber, oneOnonePrice, totalHour, mentorPic, button}) => (
                    <MentorCard 
                        id={id}
                        daysJoined={daysJoined}
                        name={name}
                        alumni={alumni}
                        rating={rating}
                        ratingQuantity={ratingQuantity}
                        yearsOfExperience={yearsOfExperience}
                        topic1={topic1}
                        topic2={topic2}
                        aiChattingPrice={aiChattingPrice}
                        totalSubscriber={totalSubscriber}
                        oneOnonePrice={oneOnonePrice}
                        totalHour={totalHour}
                        mentorPic={mentorPic}
                        button={button}
                    />
                    
                ))}
            </div>

            <div className='flex justify-between bottom-1/20 relative h-32 w-32'>    
                <div className='absolute inset-x-0 bottom-0 h-16'>
                    <button className="px-6 py-3 text-md text-accent-light font-semibold rounded-full border border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                        Load more
                    </button>               
                </div>
                
            </div> 

            
            

            
            
        </Page>  
        
        
            
    )

}

export default FindMentor
