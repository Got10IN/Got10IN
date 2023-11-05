import { ICollegeRanking } from '../../../types/ICollegeRanking'
import { IQuestionnaire } from '../../../types/IQuestionnaire'
import BaseRequest, { PBaseRequest } from '../BaseRequest'
import { generatePrompt } from './generatePrompt'
import { parseQuesionnaire } from './parseQuestionnaire'

export default async function RankingRequest(
    questionnaire: IQuestionnaire,
    args?: PBaseRequest
): Promise<ICollegeRanking> {
    return BaseRequest({
        prompt: generatePrompt(parseQuesionnaire(questionnaire)),
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
            try {
                const list = JSON.parse(data)

                if (list && list.length > 0) {
                    return list as ICollegeRanking
                }
            } catch {
                const split = data.split('\n')
                return split
                    .slice(split.length - 10)
                    .map((entry) => {
                        return entry.split('. ')
                    })
                    .map((entry) => {
                        return entry[1].replace(/\([^)]*\)/g, '').trim()
                    }) as ICollegeRanking
            }
        })
        .then((ranking: ICollegeRanking | undefined) => {
            if (ranking) {
                return ranking as ICollegeRanking
            } else {
                throw new Error('Type of ranking equals undefined')
            }
        })
        .catch((error: Error) => {
            console.log(error.stack)
            return [] as ICollegeRanking
        })
}
