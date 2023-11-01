import ComingSoon from '../../assets/aboutUs/ComingSoon.png'
import Page from '../../components/layout/Page.layout'

function BecomeAMentor() {
    return (
        <Page className='flex-col gap-12 items-start'>
            <img
                src={ComingSoon}
                alt=''
                className='max-w-full pointer-events-none'
            />
        </Page>
    )
}

export default BecomeAMentor
