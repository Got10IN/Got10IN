

import type { FC } from 'react'
import { Parallax } from '../../utils/modules/react-scroll-parallax'
import { useReduxContext } from '../../utils/hooks/redux.hook'
import Image, { StaticImageData } from 'next/image'

export interface ICard {
    title: string
    description: FC
    image: string | StaticImageData
    button: FC
    reverse?: boolean
}

const Card = ({
    title,
    description: Description,
    image,
    button: Button,
    reverse,
}: ICard) => {
    const { mobile } = useReduxContext()
    
    return (
        <div
            className={`flex px-1/10 items-center pb-[12%] gap-8 ${
                reverse ? 'flex-row-reverse' : 'flex-row'
            } sm:flex-col`}
        >
            <Parallax speed={mobile ? 0 : 5} className='basis-1/2'>
                <Image
                    src={image}
                    alt=''
                    className={`w-full hover:scale-105 duration-300 ease-in-out ${
                        reverse ? 'pl-1/10' : 'pr-1/10'
                    }`}
                />
            </Parallax>

            <div className='basis-1/2'>
                <p className='text-3xl font-black text-accent mb-4'>{title}</p>
                <Description />

                <Button />
            </div>
        </div>
    )
}

export default Card
