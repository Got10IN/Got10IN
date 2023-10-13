import { FC } from 'react'

interface IButton {
    children: string | FC
    onClickHandler?: () => void
    gray?: boolean
}

export const Button = ({ children, onClickHandler, gray }: IButton) => (
    <button
        className={`${
            gray ? 'bg-white/30' : 'bg-highlight'
        } text-sm font-extrabold text-white rounded-full px-1/5 py-3 text-center cursor-pinter no-underline inline-block min-w-max`}
        onClick={onClickHandler}
    >
        {typeof children === 'string' ? children : <text />}
    </button>
)
