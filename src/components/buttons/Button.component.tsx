'use client'

import { HTMLAttributes } from 'react'

type IButton = {
    gray?: boolean
} & HTMLAttributes<HTMLButtonElement>

export const Button = ({ children, gray, className, ...args }: IButton) => (
    <button
        className={
            `${
                gray ? 'bg-white/30' : 'bg-highlight'
            } text-sm font-extrabold text-white rounded-full px-1/5 py-3 text-center cursor-pinter no-underline block min-w-max ` +
            className
        }
        {...args}
    >
        {children}
    </button>
)
