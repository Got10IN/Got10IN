export interface IQuestionnaire {
    q1: IQMultiSelect
    q2: IQSingleSelect
    q3: [IQMultiSelect, IQMultiSelect]
    q4: [IQMultiSelect, IQMultiSelect]
    q5: IQTendency
    q6: IQTendency
    q7: IQMultiSelect
    q8: IQMultiSelect
    q9: IQMultiSelect
    q10: 
        IQTendency[]
    q11: [IQMultiSelect, IQMultiSelect]
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
