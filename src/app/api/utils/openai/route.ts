import axios from 'axios'
import { OpenAIAPIKey } from '../../../../utils/constants/api'
import { EVENTS } from '../../../../utils/analytics/events'
import createVercelAnalyticsEvent from '../../../../utils/analytics/track'
import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
    try {
        const { prompt, max_tokens, temperature } = await req
            .json()
            .catch(() => {
                throw new Error('Invalid JSON format in the request body')
            })

        const data = {
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt ? prompt : '',
            max_tokens: max_tokens ? max_tokens : 150,
            temperature: temperature ? temperature : 0,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${OpenAIAPIKey}`,
            },
        }

        const res = await axios
            .post('https://api.openai.com/v1/completions', data, config)
            .then((response) => {
                if (response.status < 400) {
                    return response
                } else {
                    createVercelAnalyticsEvent(
                        EVENTS.OPENAI_BASE_REQUEST_ERROR,
                        {
                            message: `request failed with a status of ${response.status}. ${response.data}`,
                        }
                    )
                    throw new Error(
                        `The API request failed with a status code of ${response.status}. ${response.data}`
                    )
                }
            })
        return new Response(JSON.stringify(res), { status: 200 })
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: `An unknown error has occurred ${error}`,
            }),
            {
                status: 400,
            }
        )
    }
}
