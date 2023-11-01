import React from 'react'

import { Dot, DotsContainer, SliderContainer } from '../home/Slider.component'
import { Fragment, ReactNode, useState } from 'react'
import './FindMentor.css'
import { Parallax } from 'react-scroll-parallax'
import FindMentorDemo from '../../assets/mentor/Mentor.png'
import { WishlistButton } from '../../components/functional/WishlistButton'
import Page from '../../components/layout/Page.layout'
import mentor1pic from '../../assets/mentor/mentor1.png'
import mentor2pic from '../../assets/mentor/mentor2.png'
import mentor3pic from '../../assets/mentor/mentor3.png'
import mentor4pic from '../../assets/mentor/mentor4.png'
import mentor5pic from '../../assets/mentor/mentor5.png'
import mentor6pic from '../../assets/mentor/mentor6.png'
import mentor7pic from '../../assets/mentor/mentor7.png'
import mentor8pic from '../../assets/mentor/mentor8.png'
import mentorpic from '../../assets/mentor/Mentor.png'
import { Button } from '../../components/buttons/Button'
import ComingSoon from '../../assets/aboutUs/ComingSoon.png'

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
            <div
                className={`absolute h-80 w-full bg-accent-light top-[10%] `}
            />
            
            <div className='flex relative h-64 w-full  z-10 space-y-8'>
                <div >
                    <div className="lg:flex items-center">
                        <div className='shrink-0'>
                            <img className="h-48 w-64 mt-4 md:mt-8 ml-40" src={mentorpic} alt="mentor pic"/>
                        </div>
                        <div className="container mx-auto overflow-hidden text-center space-y-4 sm:text-left items-center">
                            <p className="text-2xl text-blue space-y-4 break-words">
                                Become our mentor<span className=" inline text-2xl text-white font-semibold break-words">
                                    , and step out of the frame of time-based salary.</span>
                            </p>

                            <div className=" flex text-sm text-white space-y-1 break-words ">
                                let us help you automate your consulting service 
                                and make your expertise able to help more students 
                                as long as gain unlimited benefits.
                            </div>
        
                            <button className="px-4 py-2 text-sm text-white font-semibold bg-amber-500 rounded-full border border-amber-500 hover:text-blue hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Become a mentor</button>                                                                               
                        </div>
                    </div>   
                </div>
            </div>
            
            <div>
                <div className="flex items-center space-x-20">
                    <div className='text-md font-semibold text-black basis-1/2'>
                        Find a mentor
                    </div>
                    <input
                        type='email'
                        className='grow h-14 w-full p-3 pl-55 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Please enter keywords'
                        value={searchMentor}
                        onChange={(e) => setSearchMentor(e.target.value)}
                        onKeyDown={handleSearchMentor}
                    />
                    
                    <span className='text-md font-semibold text-black '>
                        or
                    </span>
                    <button
                        className="basis-1/2 px-10 py-1 text-md text-white font-semibold bg-accent rounded-full border border-purple-200 hover:text-white hover:bg-dark-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"                                                                            
                        onClick={handleSearchMentor}
                    >
                        Match me a mentor
                    </button>
                </div>
            </div> 
            

            
            <div className='flex justify-between gap-1/20'>
                 
                <div>    
                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor1pic} alt="mentor1 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Johnny Ive </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (211) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                4 years in <span className='text-slate-900'> Design Mentor | Product Design </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley  x12
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford  x5
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 50/yr
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 100+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 80/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 360 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>
                    
                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor2pic} alt="mentor2 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Lily Brown </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    Senior @ Standford University     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (12) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                Majoring in <span className='text-slate-900'> Design Impact </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    Free
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 30+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 20/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 20 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>

                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor3pic} alt="mentor3 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Dan Cohen </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    Senior @Standford University     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (12) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                Majoring in <span className='text-slate-900'> Design Impact </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    Free
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 30+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 20/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 20 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>

                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor4pic} alt="mentor4 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                David Lin </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (211) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                4 years in <span className='text-slate-900'> Design Mentor | Product Design </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley  x12
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford  x5
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 50/yr
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 100+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 80/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 360 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>
                </div>
                {/* <Parallax speed={5} className='basis-1/20'>

                </Parallax> */}
                <div>
                <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor5pic} alt="mentor5 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                James Davis </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (211) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                4 years in <span className='text-slate-900'> Design Mentor | Product Design </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley  x12
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford  x5
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 50/yr
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 100+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 80/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 360 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>
                    
                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor6pic} alt="mentor6 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Nick Murphy </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (211) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                4 years in <span className='text-slate-900'> Design Mentor | Product Design </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley  x12
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford  x5
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 50/yr
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 100+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 80/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 360 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>

                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor7pic} alt="mentor7 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Ana Stuart </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (211) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                4 years in <span className='text-slate-900'> Design Mentor | Product Design </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley  x12
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford  x5
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 50/yr
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 100+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 80/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 360 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>

                    <Parallax speed={5} className='basis-1/2'>
                        <div>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-x-8">
                                <div className="lg:flex">
                                    <div className='shrink-0'>
                                        <img className="w-16 md:w-32 lg:w-48 h:full" src={mentor8pic} alt="mentor8 pic"/>
                                    </div>
                                    <div className="container mx-auto px-4 text-center space-y-4 sm:text-left">
                                        <div className="text-xs text-black text-slate-500 space-y-1 whitespace-pre">
                                            120 days    <span className=" inline text-2xl text-black font-semibold">
                                                Lena Jane </span>    has joined
                                        </div>
                                        <div className="space-y-2">
                                            
                                            
                                            <div className='flex items-center whitespace-pre'>
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre">
                                                    UC Berkeley Alumni     |
                                                </p>
                                                <svg className="w-4 h-4 text-yellow-300 mr-1 whitespace-pre" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>                              
                                                <p className="text-sm font-medium text-black text-slate-500 whitespace-pre" >4.3 (12) reviews</p>
                                                
                                            </div>   
                                            
                                            <p className="text-sm font-medium text-black text-slate-500">
                                                Senior @ Standford University <span className='text-slate-900'> Design Impact </span>
                                            </p> 
                                        </div>
                                        <div className="space-y-1 text-based">
                                            
                                            <p className="text-left text-sm font-medium text-black text-slate-500">
                                                Mentees got in
                                            </p>
                                            <div className="flex flex-row items-center">
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    UC Berkeley
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    Standford
                                                </span> 
                                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 break-after-column">
                                                    +3
                                                </span> 
                                            </div>
                                            
                                        </div>
                                        <div className="gap-8 columns-2">
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    AI Char Consulting
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    Free
                                                </p> 
                                                <p className="text-xs font-medium text-black text-slate-500">
                                                    Total subscriber <span className='text-indigo-300'> 30+ </span>
                                                </p> 
                                            </div>
                                            <div className="text-sm font-medium text-black text-slate-500">
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    1 on 1 Mentor
                                                </p>
                                                <p className="text-lg font-medium text-black text-sky-900">
                                                    $ 20/hr
                                                </p> 
                                                <p className="text-sm font-medium text-black text-slate-500">
                                                    Total hour <span className='text-indigo-300'> 20 </span>
                                                </p> 
                                            </div> 
                                        </div>
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>                                                                               
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div> 
             
            <div className='flex justify-between gap-1/2'>
                
                <div>
                    <button className="px-6 py-3 text-md text-accent-light font-semibold rounded-full border border-accent hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Load more</button>           
                    {/* <Button>Load more</Button> */}
                </div>
                
            </div> 
            
        </Page>  
        
        
            
    )

}

export default FindMentor
