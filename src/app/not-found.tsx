import Page from '../components/layout/Page.layout'

const NotFoundPage = () => {
    return (
        <Page className="min-h-[50vh] justify-center">
            <p>
                oops, the page you are looking for decided to bail on us. If you
                believe this is a mistake, please contact us at{' '}
                <a
                    href="mailto:hello@got10in.com"
                    className="underline text-accent"
                >
                    hello@got10in.com
                </a>
                .
            </p>
        </Page>
    )
}

export default NotFoundPage
