import { track } from '@vercel/analytics/*'
import { EVENTS } from './events'

const createVercelAnalyticsEvent = (
    eventType: EVENTS,
    message?: { message: string; stack: string }
) => {
    switch (eventType) {
        case EVENTS.OPENAI_BASE_REQUEST_ERROR:
            track('OpenAI BaseRequest Error', message)
            break
        case EVENTS.OPENAI_RANKING_REQUEST_ERROR:
            track('OpenAI RankingRequest Error', message)
            break
        case EVENTS.OPENAI_TAGS_REQUEST_ERROR:
            track('OpenAI TagsRequest Error', message)
            break
        case EVENTS.RANKING_REQUEST_FAILED_AFTER_ATTEMPTS:
            track('Ranking Request Failed After 3 Attempts')
            break
        case EVENTS.REDO_TEST:
            track('Redoing test')
            break
        case EVENTS.LOCAL_STORAGE_RESULT_ERROR:
            track('Failed to retrive local stroage for results')
            break
        default:
            break
    }
}

export default createVercelAnalyticsEvent
