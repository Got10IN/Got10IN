import axios from 'axios'
import { OpenAIAPIKey } from '../../constants/api'

export type PBaseRequest = {
    prompt?: string
    max_tokens?: number
    temperature?: number
}

export default async function BaseRequest({
    prompt = '',
    max_tokens = 150,
    temperature = 0,
}: PBaseRequest) {
    const data = {
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt,
        max_tokens: max_tokens,
        temperature: temperature,
    }

    const config = {
        headers: {
            Authorization: `Bearer ${OpenAIAPIKey}`,
        },
    }

    return axios
        .post('https://api.openai.com/v1/completions', data, config)
        .then((response) => {
            if (response.status === 200) {
                return response
            } else {
                throw new Error(
                    `The API request failed with a status code of ${response.status}`
                )
            }
        })
        .catch((error: Error) => {
            console.log(error.stack)
        })
}
