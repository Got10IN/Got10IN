export interface IQuestionaire {
    q1: IQMultiSelect
    q2: IQSingleSelect
    q3: IQMultiSelect[]
    q4: IQMultiSelect[]
    q5: IQTendency
    q6: IQTendency
    q7: IQMultiSelect
    q8: IQMultiSelect
    q9: IQMultiSelect
    q10: IQTendency[]
    q11: IQMultiSelect[]
}

export interface IQMultiSelect {
    options: string[]
}

export interface IQSingleSelect {
    option: string
}

export interface IQTendency {
    tendency: number
}
