'use client'

import { IComponent } from '../../utils/types/IComponent'

const DeptButton = ({
    children,
    selected,
    ...args
}: IComponent & {
    selected?: boolean
}) => {
    return (
        <button
            className={`px-4 py-2 text-sm min-w-max text-black ${
                selected
                    ? 'bg-accent text-white'
                    : 'bg-white hover:text-white hover:bg-accent-light'
            } font-semibold rounded-lg duration-150`}
            {...args}
        >
            {children}
        </button>
    )
}

export default DeptButton
