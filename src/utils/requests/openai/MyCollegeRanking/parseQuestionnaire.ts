import type { IQuestionnaire } from '../../../types/IQuestionnaire'
import { PromptProps } from './generatePrompt'

export const parseQuesionnaire = (quesionnaire: IQuestionnaire): PromptProps => {
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11 } = quesionnaire
    const fieldsOfInterest = q1.options.join(', ')

    const mbti = q2.option

    const weather =
        'prefers ' +
        q3[0].options.join(', ') +
        ' and avoids ' +
        q3[1].options.join(', ')

    const location =
        'prefers ' +
        q4[0].options.join(', ') +
        ' and avoids ' +
        q4[1].options.join(', ')

    const lifestyle =
        q5.tendency + '% urban and ' + (100 - q5.tendency) + '% rural'

    const vibe =
        q6.tendency + '% party and ' + (100 - q6.tendency) + '% hardcore'

    const collegeType = q7.options.join(', ')

    const tuition = q8.options.join(', ')

    const gpa = q9.options.join(', ')

    const otherFactors = `(percentage here refers to how much user values each category) ${q10[0].tendency}% diversity, ${q10[1].tendency}% good food, ${q10[2]}% safety, ${q10[3].tendency}% career development, ${q10[4].tendency}% research opportunities, ${q10[5].tendency}% school reputation, ${q10[6].tendency}% sports culture`

    const rankingFor =
        q11[0].options.length > 0 && q11[0].options[0] === 'Undergrad'
            ? 'Undergraduate Schools'
            : 'Graduate Schools'

    const importantFactors = q11[1].options.join(', ')

    return {
        fieldsOfInterest: fieldsOfInterest,
        mbti: mbti,
        weather: weather,
        location: location,
        lifestyle: lifestyle,
        vibe: vibe,
        collegeType: collegeType,
        tuition: tuition,
        gpa: gpa,
        otherFactors: otherFactors,
        rankingFor: rankingFor,
        importantFactors: importantFactors,
    }
}
