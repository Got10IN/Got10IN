import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
    IQMultiSelect,
    IQSingleSelect,
    IQTendency,
    IQuestionnaire,
} from '../../interface/IQuestionnaire'
import { CQuestionnaire } from '../../class/Questionnaire.class'

export interface QuestionnaireState {
    value: IQuestionnaire
}

const initialState: QuestionnaireState = {
    value: new CQuestionnaire(),
}

export const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        updateQ1: (state, action: PayloadAction<IQMultiSelect>) => {
            state.value.q1 = action.payload
        },
        updateQ2: (state, action: PayloadAction<IQSingleSelect>) => {
            state.value.q2 = action.payload
        },
        updateQ3: (
            state,
            action: PayloadAction<[IQMultiSelect, IQMultiSelect]>
        ) => {
            state.value.q3 = action.payload
        },
        updateQ4: (
            state,
            action: PayloadAction<[IQMultiSelect, IQMultiSelect]>
        ) => {
            state.value.q4 = action.payload
        },
        updateQ5: (state, action: PayloadAction<IQTendency>) => {
            state.value.q5 = action.payload
        },
        updateQ6: (state, action: PayloadAction<IQTendency>) => {
            state.value.q6 = action.payload
        },
        updateQ7: (state, action: PayloadAction<IQMultiSelect>) => {
            state.value.q7 = action.payload
        },
        updateQ8: (state, action: PayloadAction<IQMultiSelect>) => {
            state.value.q8 = action.payload
        },
        updateQ9: (state, action: PayloadAction<IQMultiSelect>) => {
            state.value.q9 = action.payload
        },
        updateQ10: (state, action: PayloadAction<IQTendency[]>) => {
            state.value.q10 = action.payload
        },
        updateQ11: (
            state,
            action: PayloadAction<[IQMultiSelect, IQMultiSelect]>
        ) => {
            state.value.q11 = action.payload
        },
        resetQuestion: (state, action: PayloadAction<number>) => {
            switch (action.payload) {
                case 1:
                    state.value.q1 = { options: [] }
                    break

                case 2:
                    state.value.q2 = { option: '' }
                    break
                case 3:
                    state.value.q3 = [{ options: [] }, { options: [] }]
                    break
                case 4:
                    state.value.q4 = [{ options: [] }, { options: [] }]
                    break
                case 5:
                    state.value.q5 = { tendency: 50 }
                    break
                case 6:
                    state.value.q6 = { tendency: 50 }
                    break
                case 7:
                    state.value.q7 = { options: [] }
                    break
                case 8:
                    state.value.q8 = { options: [] }
                    break
                case 9:
                    state.value.q9 = { options: [] }
                    break
                case 10:
                    state.value.q10 = [
                        { tendency: 0 },
                        { tendency: 0 },
                        { tendency: 0 },
                        { tendency: 0 },
                        { tendency: 0 },
                        { tendency: 0 },
                        { tendency: 0 },
                    ]
                    break
                case 11:
                    state.value.q11 = [{ options: [] }, { options: [] }]
                    break
                default:
                    break
            }
        },
    },
})

export const {
    updateQ1,
    updateQ2,
    updateQ3,
    updateQ4,
    updateQ5,
    updateQ6,
    updateQ7,
    updateQ8,
    updateQ9,
    updateQ10,
    updateQ11,
    resetQuestion,
} = questionnaireSlice.actions

export default questionnaireSlice.reducer
