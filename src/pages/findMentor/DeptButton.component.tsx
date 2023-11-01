import { FC } from 'react'

export interface IDeptButton {
    title: string
    description?: FC
    button?: FC
}

const DeptButton = ({ title, description : Description, button: Button,}: IDeptButton) => {
    const isAll = (title: string): boolean => {
        return title === 'All'
    }

    return (
         
        <div>
            <button className= {`px-4 py-2 text-sm text-black font-semibold rounded-lg shadow-md hover:text-white hover:bg-blue-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2' 
            ${isAll(title) ? "bg-accent-light"
                    : "bg-white"}`}
            >
                {title}
            </button>

            
        </div>
    )
}

export default DeptButton