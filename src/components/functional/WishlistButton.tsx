'use client'

import { IComponent } from '../../utils/types/IComponent'
import { WishListForm } from '../../utils/constants/links'
import { Button } from '../buttons/Button.component'

export const WishlistButton = ({ className }: IComponent) => (
    <Button
        className={className}
        onClick={() => {
            window.location.href = WishListForm
        }}
    >
        Join wishlist
    </Button>
)
