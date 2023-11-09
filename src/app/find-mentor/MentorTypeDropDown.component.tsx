'use client'

import { useState } from 'react'

export const MentorTypeDropDown = () => {
    const [isOpenMentorType, setOpenMentorType] = useState(false)
    const handleDropDownMentorType = () => {
        setOpenMentorType(!isOpenMentorType)
    }
    return (
        <div className="dropdown whitespace-pre">
            Mentor Type: {'   '}
            <button
                className="text-black font-medium rounded-full text-sm px-6 py-2 text-center inline-flex items-center shadow-md  focus:ring-2 focus:outline-none focus:ring-blue-300"
                onClick={handleDropDownMentorType}
            >
                All
                <svg
                    className="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            <div
                id="dropdown"
                className={`z-10 w-full bg-white rounded divide-y divide-gray-100 shadow ${
                    isOpenMentorType ? 'block' : 'hidden'
                }`}
            >
                <ul className=" z-10 w-full bg-white rounded divide-y divide-gray-100 shadow ">
                    <li>
                        <a
                            href="#"
                            className="flex py-2 px-4 text-sm hover:bg-gray-100"
                        >
                            Pro
                        </a>
                        <a
                            href="#"
                            className="flex py-2 px-4 text-sm hover:bg-gray-100"
                        >
                            Peer
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
