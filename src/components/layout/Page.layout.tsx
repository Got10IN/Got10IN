import { IComponent } from '../../interface/IComponent'

const Page = ({ children, className }: IComponent) => {
    return (
        <div
            className={
                'flex h-auto w-full bg-white py-40 px-1/10 flex-row items-center sm:flex-col sm:pt-60 ' +
                className
            }
        >
            {children}
        </div>
    )
}

export default Page
