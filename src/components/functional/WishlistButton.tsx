import { IComponent } from '../../interface/IComponent'
import { WishListForm } from '../../utils/constants/links'

export const WishlistButton = ({ className }: IComponent) => (
    <a
        href={WishListForm}
        target='_blank'
        rel='noopener noreferrer'
        className={
            'bg-highlight hover:drop-shadow-standard font-semibold text-white rounded-full px-6 py-3 text-center cursor-pinter no-underline inline-block ' +
            className
        }
    >
        Join wishlist
    </a>
)
