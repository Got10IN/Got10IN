'use client'

import axios from 'axios'
import { Fragment, useState } from 'react'

export const SubscribeField = () => {
    const [email, setEmail] = useState('')
    const [text, setText] = useState('Subscribe')

    const handleSubscription = async (email: string) => {
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            return
        }

        const data = { email }
        fetch('/api/utils/subscribe/', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status < 400) {
                    setText('✔️')
                    setEmail('')
                    setTimeout(() => {
                        setText('Subscribe')
                    }, 1000)
                    return response.json()
                } else {
                    throw new Error(`response failed: ${response.json()}`)
                }
            })
            .then((data) => {
                console.log(data)
            })
            .catch((e: Error) => {
                console.error(e.stack)
            })

        axios
            .post('/api/utils/subscribe/', data)
            .then((response) => {
                if (response.status < 400) {
                    setText('✔️')
                    setEmail('')
                    setTimeout(() => {
                        setText('Subscribe')
                    }, 1000)
                    return response.data
                } else {
                    throw new Error(`response failed: ${response.data}`)
                }
            })
            .then((data) => {
                console.log(data)
            })
            .catch((e: Error) => {
                console.error(e.stack)
            })
    }
    return (
        <Fragment>
            <input
                type="email"
                className="w-3/5 block max-w-lg py-1.5 px-3 text-accent-dark bg-white h-full rounded-full appearance-none bg-clip-padding border-[1px] border-solid border-text-dark transition-all duration-150 ease-in-out"
                placeholder="Enter your email to subscribe!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                className="bg-highlight text-sm h-10 px-[4%] text-white font-extrabold border-none rounded-full text-center no-underline inline-block cursor-pointer"
                onClick={() => handleSubscription(email)}
            >
                {text}
            </button>
        </Fragment>
    )
}
