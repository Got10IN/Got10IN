import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ContextState {
    mobile: boolean
}

const initialState: ContextState = {
    mobile: false
}

export const contextSlice = createSlice({
    name: 'collegeRanking',
    initialState,
    reducers: {
        updateMobile: (state, action: PayloadAction<boolean>) => {
            state.mobile = action.payload
        },
    },
})

export const { updateMobile } = contextSlice.actions

export default contextSlice.reducer
