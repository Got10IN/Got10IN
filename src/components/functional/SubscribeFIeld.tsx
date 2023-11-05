'use client'

import { Fragment, useState } from 'react'

export const SubscribeField = () => {
    const [email, setEmail] = useState('')

    const handleSubscription = async () => {
        try {
            const response = await fetch(
                'https://got10in-backend-cfba39007310.herokuapp.com/subscribe/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email }),
                }
            )
            const data = await response.json()
            if (response.ok) {
                alert(
                    'Successfully subscribed! You should receive an email confirmation momentarily'
                )
            } else {
                alert(
                    'An unknown issue has occurred! So sorry about this. If you want, contact us through any method and ask to be added to the list.'
                )
            }
        } catch (error) {}
    }
    return (
        <Fragment>
            <input
                type='email'
                className='w-3/5 block max-w-lg py-1.5 px-3 text-accent-dark bg-white h-full rounded-full appearance-none bg-clip-padding border-[1px] border-solid border-text-dark transition-all duration-150 ease-in-out'
                placeholder='Enter your email to subscribe!'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                className='bg-highlight text-sm h-10 px-[4%] text-white font-extrabold border-none rounded-full text-center no-underline inline-block cursor-pointer'
                onClick={handleSubscription}
            >
                Subscribe
            </button>
        </Fragment>
    )
}
