export interface PPrompt {
    fieldsOfInterest: string
    mbti: string
    weather: string
    location: string
    lifestyle: string
    vibe: string
    collegeType: string
    tuition: string
    gpa: string
    otherFactors: string
    rankingFor: string
    importantFactors: string
}

export const generatePrompt = ({
    fieldsOfInterest,
    mbti,
    weather,
    location,
    lifestyle,
    vibe,
    collegeType,
    tuition,
    gpa,
    otherFactors,
    rankingFor,
    importantFactors,
}: PPrompt) => {
    return `Generate the top 10 US college ranking based on the following preferences of a student.
    Rules:
    Don't respond with anything else but the actual school name(Don't say anything else).
    Do not generate severely depending on one preference, it should be holistic(example: Don't make every college from the west coast just because I said I like sunny weather).
    Return a JSON file.
    
    Preferences:
    Fields of interest: ${fieldsOfInterest}
    MBTI: ${mbti}
    Weather preferences: ${weather}
    Location preferences: ${location}
    Lifestyle: ${lifestyle}
    College vibe: ${vibe}
    College types: ${collegeType}
    Ideal tuition: ${tuition}
    GPA range: ${gpa}
    Other important factors: ${otherFactors}
    This ranking is for: ${rankingFor}
    Which ones of the above factors matter more: ${importantFactors}
    Please include public universities, private universities, liberal arts colleges, art schools like ACCD or RISD, and other school types as you see fit.
    
    To reiterate, please return the answer in a JSON format and nothing else`
}
