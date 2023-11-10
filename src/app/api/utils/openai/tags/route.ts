import axios from 'axios'
import { NextRequest } from 'next/server'
import { EVENTS } from '../../../../../utils/analytics/events'
import createVercelAnalyticsEvent from '../../../../../utils/analytics/track'
import { parseQuesionnaire } from '../../../../../utils/requests/openai/MyCollegeRanking/parseQuestionnaire'
import { PromptProps } from '../../../../../utils/types/server/OpenAI.props'

export const generatePrompt = ({
    fieldsOfInterest,
    mbti,
    weather,
    location,
    lifestyle,
    vibe,
    tuition,
    gpa,
    otherFactors,
    rankingFor,
    importantFactors,
}: PromptProps) => {
    return `Generate a few (3 to 5) descriptive tags for based on the following preferences of a student.
    Rules:
    The tags should be fun and spontaneous, but not overly witty. Include their MBTI as an option if necessary.
    Return information in this format: "#tag1 #tag2 #tag3…"
    Don't use tags like #affordable-tuition or #gpa-doesnt-matter

    Examples:
    "#future-lawyer #ESTJ #party-king #gpa-driven"
    "#doctor-in-the-making #ISTJ #cali-boi"
    
    The following is preferences from the student:
    Fields of interest: ${fieldsOfInterest}
    MBTI: ${mbti}
    Weather preferences: ${weather}
    Location preferences: ${location}
    Lifestyle: ${lifestyle}
    College vibe: ${vibe}
    Ideal tuition: ${tuition}
    GPA range: ${gpa}
    Other important factors: ${otherFactors}
    This ranking is for: ${rankingFor}
    Which ones of the above factors matter more: ${importantFactors}
    `
}

export const POST = async (req: NextRequest) => {
    try {
        const { questionnaire, ...args } = await req.json().catch(() => {
            throw new Error('Invalid JSON format in the request body')
        })

        const data = {
            model: 'gpt-3.5-turbo-instruct',
            prompt: generatePrompt(parseQuesionnaire(questionnaire)),
            temperature: 0.5,
            ...args,
        }

        const res = await axios
            .post('/api/utils/openai/', data)
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
            .catch(() => {
                return ['#something-went-wrong #sorry-about-that']
            })
        return new Response(JSON.stringify(res), {
            status: 200,
        })
    } catch (error) {
        if (error instanceof Error) {
            createVercelAnalyticsEvent(EVENTS.OPENAI_TAGS_REQUEST_ERROR, {
                message: error.message,
                stack: error.stack ? error.stack : '',
            })
        } else {
            createVercelAnalyticsEvent(EVENTS.OPENAI_TAGS_REQUEST_ERROR)
        }
        return new Response(JSON.stringify(error), {
            status: 400,
        })
    }
}
