import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICollegeRanking } from '../../interface/ICollegeRanking'

export interface CollegeRankingState {
    value: ICollegeRanking
}

const initialState: CollegeRankingState = {
    value: [],
}

export const collegeRankingSlice = createSlice({
    name: 'collegeRanking',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<ICollegeRanking>) => {
            state.value = action.payload
        },
    },
})

export const { updateState } = collegeRankingSlice.actions

export default collegeRankingSlice.reducer
