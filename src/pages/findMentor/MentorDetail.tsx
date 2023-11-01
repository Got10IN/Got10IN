import React, { Fragment, ReactNode, useState, useEffect } from 'react'
import {render} from 'react-dom'
import { Dot, DotsContainer, SliderContainer } from '../home/Slider.component'

import './FindMentor.css'
import { Parallax } from 'react-scroll-parallax'
import FindMentorDemo from '../../assets/mentor/Mentor.png'
import { WishlistButton } from '../../components/functional/WishlistButton'
import Page from '../../components/layout/Page.layout'
import mentor1pic from '../../assets/mentor/mentor1.png'
import mentorpic from '../../assets/mentor/Mentor.png'
import largementor from '../../assets/mentor/LargeMentor.png'
import menteesGotIn from '../../assets/mentor/MenteesGotIn.png'
import uniLgoUCB from '../../assets/mentor/UniLogo-UCB.png'
import uniLogoCalTech from '../../assets/mentor/UniLogo-CalTech.png'
import { Button } from '../../components/buttons/Button'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import DeptButton from './DeptButton.component'
import { LoadMoreArrow } from './LoadMoreArrow.component'
import { OverallDropDown } from './OverallDropDown.component'
import { useNavigate } from 'react-router-dom'



function MentorDetail() {
    const [searchMentor, setSearchMentor] = useState('')
    const [talkToMentor, setTalkToMentor] = useState('')
    const [isOpen, setOpen] = useState(false);
    const navigate =useNavigate();

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const routeChangeToBecomeAMentor = ()=>{
        let path='/become-a-mentor';
        navigate(path);
    }

    

    return (  
        <Page className='flex-col items-start'>   
            <div className='absolute h-80 w-full bg-accent-light top-1/10'/>
            
            <div className='flex max-h-fit w-full z-0 mb-8'>
                
                    <div className="grid grid-cols-3 gap-8 place-items-center">
                        <div>
                            <img className="h-48 w-64 mt-8 ml-1/10" 
                            src={mentorpic} 
                            alt="mentor pic"
                            />
                        </div>
                        <div className='col-span-2 overflow-hidden text-center space-y-4 sm:text-left items-center'>
                            <img className="h-32 w-96 mt-8" 
                            src={largementor} 
                            alt="largementor pic"
                            />
                        </div>
                    </div>   
                
            </div>

            
            
            <div className='grid grid-cols-2 mb-8'>
                <div className="col-span-1 flex items-center space-x-4">
                    <div className="block h-full w-full rounded-lg object-none z-20 bg-white  dark:bg-neutral-700">
                        <div className="flex justify-center -mt-[95px]">
                            <img src={mentor1pic}
                                className="object-fill rounded-full h-40 w-40  object-[9%_-12px] shadow-lg dark:shadow-black/20" alt="Avatar" />
                        </div>
                    </div>
                    
                    <div className="font-medium space-y-4 dark:text-white">
                        <div className= "text-2xl">Amy Smith</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Hey, kids. I'm a passionate design mentor.
                            Let me help you get in to your dream school!
                        </div>
                    </div>
                </div>
                <div className="col-span-1 place-items-center">
                    <div className="gap-4 columns-4 mb-4">
                        <div className="text-sm font-medium text-black">
                            <p>
                                AI Char Consulting
                            </p>
                            <p className="text-lg text-sky-900">
                                $ 20/yr
                            </p>    
                        </div>
                        <div>
                            <button onClick={routeChangeToBecomeAMentor}
                                className="px-6 py-3 text-md text-white bg-accent-light font-semibold rounded-lg justify-self-center border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>

                                Unlock
                            </button> 
                        </div>

                        <div className="text-sm font-medium text-black ">
                            <p className="text-sm font-medium  ">
                                1 on 1 Mentor
                            </p>
                            <p className="text-lg font-medium">
                                $ 80/hr
                            </p>     
                        </div> 
                        <div>
                            <button onClick={routeChangeToBecomeAMentor}
                                className="px-6 py-3 text-md  text-white bg-gray-300 font-semibold rounded-lg justify-self-center border-accent hover:text-white hover:bg-yellow-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="w-6 h-6">
                                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>

                                Book Now
                            </button> 
                        </div>
                    </div>    

                    <div className=" flex text-black items-center space-y-2 whitespace-pre">                   
                        <div className='flex items-center'>
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
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>                              
                              
                            <p className="text-sm font-medium text-black ">
                                4 years in {' '}
                                <span className='text-slate-900'> 
                                {' '} Design Mentor · Product Design {' '}
                                </span>
                            </p> 

                            <p className="text-sm font-medium text-black" >
                                | {' '}4.3 (211) reviews
                            </p>  
                        </div>   
                        
                        
                        
                    
                    </div>

                </div>
            </div>
            


            <div className="flex w-full min-w-max place-items-stretch inline-flex rounded-md shadow-sm mb-8 " role="group">
                <button type="button" className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Mentor Profile
                </button>
                <button type="button" className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Blogs & Posts
                </button>
                <button type="button" className="basis-1/3 px-16 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-accent hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Reviews
                </button>
            </div>

            
            <div className='flex flex-row space-x-2 justify-between mb-8'>
                <button className="px-4 py-2 text-sm text-black bg-accent-light font-semibold rounded-lg border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                    Talks about: 
                </button>
                
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


            <div className='h-56 w-full p-4 grid grid-flow-row auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md'>
                <div className="grid text-xl rounded-md" >Mentees got in</div>
                
                <img className='flex' src={menteesGotIn} alt="menteesGotIn"/>
                
            </div>

            

            <div className=' flex flex-col h-fit w-full p-4 auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md'>
                <div className="flex text-xl rounded-md" >Education Background</div>
                
                <ul className='list-none'>
                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={uniLgoUCB} alt="mentor1pic" />
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

                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={uniLogoCalTech} alt="mentor1pic" />
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

                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={mentorpic} alt="mentor1pic" />
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

            <div className=' flex flex-col h-fit w-full p-4 auto-rows-max md:auto-rows-min mb-8 space-y-4 shadow-md'>
                <div className="flex text-xl rounded-md" >Work Experience</div>
                
                <ul className='list-none'>
                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={mentorpic} alt="mentor1pic" />
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

                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={mentorpic} alt="mentor1pic" />
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

                    <li className='flex flex-row space-x-2 justify-between'>    
                        <div className="flex flex-row space-x-4 space-y-2 text-left ml-4">
                            <img className=" rounded-full h-12 w-12 sm:mx-0 sm:shrink-0" src={mentorpic} alt="mentor1pic" />
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