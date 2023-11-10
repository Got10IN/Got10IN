import { PromptProps } from "../../../types/server/OpenAI.props"


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
}: PromptProps) => {
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
    Ideal tuition: ${tuition}
    GPA range: ${gpa}
    Other important factors: ${otherFactors}
    This ranking is for: ${rankingFor}
    Which ones of the above factors matter more: ${importantFactors}
    Please include public universities, private universities, liberal arts colleges, art schools like ACCD or RISD, and other school types as you see fit.

    Please make most of the schools you list in the type of ${collegeType}. If I said Liberal Arts College, please make at least 8 of them being liberal arts colleges and don't include public universities. If I specified that my major of interest includes art or music, please also include art schools like RISD and music schools like Berklee.
    
    To reiterate, please return the answer in a JSON format and nothing else`
}
