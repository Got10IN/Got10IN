'use client'

import {
    ParallaxProvider,
    Parallax as SSRParallax,
} from 'react-scroll-parallax'
import { useAppSelector } from '../hooks/redux.hook'
import { IComponent } from '../types/IComponent'
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types'

export {
    useParallax,
    useParallaxController,
    ParallaxBanner,
    ParallaxBannerLayer,
    ParallaxProvider,
    ParallaxContext,
    EasingPreset,
} from 'react-scroll-parallax'

export type { EffectNumber, EffectString } from 'react-scroll-parallax'

export const Parallax = ({ speed, children }: IComponent & ParallaxProps) => {
    const { mobile } = useAppSelector((state) => state.context)
    return <SSRParallax speed={mobile ? 0 : speed}>{children}</SSRParallax>
}

export default ParallaxProvider
