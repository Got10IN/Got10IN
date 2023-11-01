import { useState } from "react";

export const LoadMoreArrow = () => {
    const [isClick, setClick] = useState(false);
  
    const handleLoadMoreArrow = () => {
      setClick(!isClick);
    };
  
    return (
        <div className="dropdown">
            <button
            className="px-4 py-2 text-sm text-black font-semibold rounded-lg shadow-md hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2"
            onClick={handleLoadMoreArrow}
            >
                
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>


            </button>
    
            <div
            id="dropdown"
            className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
                isClick ? "block" : "hidden"
            }`}
            >
            
            </div>
        </div>
    );
};