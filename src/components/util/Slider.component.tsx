import { Dispatch, ReactNode, SetStateAction } from 'react'

const SliderContainer = ({
    children,
    postion,
    className,
}: {
    children: ReactNode | ReactNode[]
    postion: 'leading' | 'center' | 'trailing'
    className?: string
}) => {
    return (
        <div
            className={`flex flex-col relative ${
                postion === 'leading'
                    ? 'items-start'
                    : postion === 'center'
                    ? 'items-center'
                    : 'items-end'
            } ${className}`}
        >
            {children}
        </div>
    )
}

const DotsContainer = ({
    children,
    className,
}: {
    children: ReactNode | ReactNode[]

    className?: string
}) => {
    return <div className={`text-center mt-2.5 ${className}`}>{children}</div>
}

const Dot = ({
    slideNumber,
    currentSlide,
    setCurrentSlide,
    className,
    light = false,
}: {
    slideNumber: number
    currentSlide: number
    setCurrentSlide: Dispatch<SetStateAction<number>>
    light?: boolean
    className?: string
}) => {
    const handleDotHover = (slideNumber: number) => {
        setCurrentSlide(slideNumber)
    }

    return (
        <div
            className={`inline-block h-2 my-0 mx-[5px] rounded-[20px] cursor-pointer transition-all duration-300 ${
                currentSlide === slideNumber
                    ? 'w-[30px] bg-highlight drop-shadow-dot'
                    : 'w-[15px] ' + (light ? 'bg-black/20' : 'bg-white/20')
            } ${className}`}
            onMouseEnter={() => handleDotHover(slideNumber)}
        />
    )
}

export { SliderContainer, Dot, DotsContainer }
