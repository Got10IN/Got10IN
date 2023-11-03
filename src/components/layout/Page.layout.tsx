import { ReactNode } from 'react'
import { IComponent } from '../../interface/IComponent'

const Page = ({
    children,
    className,
    removeTopMargin,
    removeSideMargin,
    banner,
}: IComponent & {
    removeTopMargin?: boolean
    removeSideMargin?: boolean
    banner?: ReactNode
}) => {
    return (
        <div
            className={`h-auto w-full ${
                removeTopMargin ? 'pb-40 pt-24' : 'py-40'
            }`}
        >
            {banner}
            <div
                className={`flex h-auto w-full ${
                    removeSideMargin ? '' : 'px-1/10'
                } items-center flex-col sm:pt-60 ${className}`}
            >
                {children}
            </div>
        </div>
    )
}

export default Page
