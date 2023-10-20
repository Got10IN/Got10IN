import { IComponent } from '../../interface/IComponent'

export const WishlistButton = ({className}: IComponent) => (
    <a
        href='https://airtable.com/appR1Mc0m0Gvrh4wx/shrgsXpR0QIXTfvHy'
        target='_blank'
        rel='noopener noreferrer'
        className={'bg-highlight text-lg hover:drop-shadow-standard font-extrabold text-white rounded-full px-6 py-3 text-center cursor-pinter no-underline inline-block ' + className}
    >
        Join wishlist
    </a>
)
