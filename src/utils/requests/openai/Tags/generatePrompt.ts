import { PromptProps } from '../../../types/server/OpenAI.props'

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
