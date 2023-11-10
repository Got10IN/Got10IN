export type BaseRequestProps = {
    prompt?: string
    max_tokens?: number
    temperature?: number
}

export type PromptProps = {
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
