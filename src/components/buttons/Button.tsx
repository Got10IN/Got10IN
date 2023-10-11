import { FC } from 'react'

interface IButton {
    text: string | FC
    onClickHandler: () => void
}

export const Button = ({ text, onClickHandler }: IButton) => (
    <button
        className='bg-highlight text-sm font-extrabold text-white rounded-full px-6 py-3 text-center cursor-pinter no-underline mt-12 inline-block'
        onClick={onClickHandler}
    >
        {typeof text === 'string' ? text : <text />}
    </button>
)
