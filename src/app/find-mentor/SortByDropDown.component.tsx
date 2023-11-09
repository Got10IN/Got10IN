import { useState } from "react";

export const SortByDropDown = ()=>{
    const [isOpenSortBy, setOpenSortBy]=useState(false);
    const handleDropDownSortBy=()=>{
        setOpenSortBy(!isOpenSortBy);
    }
    return (
        <div className="dropdown whitespace-pre">
            Sort By: {'   '}
            <button
            className="text-black font-medium rounded-full text-sm px-6 py-2 text-center inline-flex items-center shadow-md  focus:ring-2 focus:outline-none focus:ring-blue-300 "
            onClick={handleDropDownSortBy}
            >
                Popular
                <svg className="ml-2 w-4 h-4" 
                    aria-hidden="true" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
    
            <div
            id="dropdown"
            className={`bg-white rounded divide-y divide-gray-100 shadow ${
                isOpenSortBy ? "block" : "hidden"
            }`}
            >
            
            <ul className=" z-10 w-full bg-white rounded divide-y divide-gray-100 shadow ">
                <li>
                
                    <a href="/" className="flex py-2 px-4 text-sm hover:bg-gray-100">
                        New
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>

                    </a>
                    <a href="/" className="flex py-2 px-4 text-sm hover:bg-gray-100">
                        Years of Experience
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                    </a>
                    <a href="/" className="flex py-2 px-4 text-sm hover:bg-gray-100">
                        AI Char Price
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </a>
                    <a href="/" className="flex py-2 px-4 text-sm hover:bg-gray-100">
                        1 on 1 Mentor Price
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </a>
                    <a href="/" className="flex py-2 px-4 text-sm hover:bg-gray-100">
                        Top Rated
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                    </a>
                </li>
            </ul>
            
            </div>
        </div>
    );
};