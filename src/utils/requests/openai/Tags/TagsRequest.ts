import { EVENTS } from '../../../analytics/events'
import createVercelAnalyticsEvent from '../../../analytics/track'
import type { IQuestionnaire } from '../../../types/IQuestionnaire'
import BaseRequest, { PBaseRequest } from '../BaseRequest'
import { parseQuesionnaire } from '../MyCollegeRanking/parseQuestionnaire'
import { generatePrompt } from './generatePrompt'

export default async function TagsRequest(
    questionnaire: IQuestionnaire,
    args?: PBaseRequest
): Promise<string[]> {
    return BaseRequest({
        prompt: generatePrompt(parseQuesionnaire(questionnaire)),
        temperature: 0.5,
        ...args,
    })
        .then((response) => {
            if (response) {
                return response.data.choices[0].text
            } else {
                throw new Error('Something major went wrong')
            }
        })
        .then((data: string) => {
            if (data.includes('#')) {
                const entries = data.match(/"[\s\S]*?"/)?.map((entry) => {
                    return entry.trim().slice(1, entry.length - 1)
                })
                if (entries) {
                    return entries
                } else {
                    throw new Error('data returned is in the wrong format')
                }
            } else {
                throw new Error('data returned is in the wrong format')
            }
        })
        .catch((error: Error) => {
            console.log(error.stack)
            createVercelAnalyticsEvent(EVENTS.OPENAI_TAGS_REQUEST_ERROR, {
                message: error.message,
                stack: error.stack ? error.stack : '',
            })
            return ['#something-went-wrong #sorry-about-that']
        })
}
