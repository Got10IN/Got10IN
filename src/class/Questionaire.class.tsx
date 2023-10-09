import {
    IQMultiSelect,
    IQSingleSelect,
    IQTendency,
    IQuestionaire,
} from '../interface/IQuestionaire'

export class Questionaire implements IQuestionaire {
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

    constructor() {
        this.q1 = { options: [] }
        this.q2 = { option: '' }
        this.q3 = [{ options: [] }, { options: [] }]
        this.q4 = [{ options: [] }, { options: [] }]
        this.q5 = { tendency: 0 }
        this.q6 = { tendency: 0 }
        this.q7 = { options: [] }
        this.q8 = { options: [] }
        this.q9 = { options: [] }
        this.q10 = [
            { tendency: 0 },
            { tendency: 0 },
            { tendency: 0 },
            { tendency: 0 },
            { tendency: 0 },
            { tendency: 0 },
            { tendency: 0 },
        ]
    }
}
