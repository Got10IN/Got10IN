import { HTMLAttributes, ReactNode } from 'react'

export type IComponent = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLElement>
