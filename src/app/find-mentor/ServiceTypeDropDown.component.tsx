'use client'

import { useState } from 'react'

export const ServiceTypeDropDown = () => {
    const [isOpenServiceType, setOpenServiceType] = useState(false)
    const handleDropDownServiceType = () => {
        setOpenServiceType(!isOpenServiceType)
    }
    return (
        <div className="dropdown whitespace-pre">
            Service Type: {'   '}
            <button
                className="text-black font-medium rounded-full text-sm px-6 py-2 text-center inline-flex items-center shadow-md  focus:ring-2 focus:outline-none focus:ring-blue-300"
                onClick={handleDropDownServiceType}
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
                    isOpenServiceType ? 'block' : 'hidden'
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
