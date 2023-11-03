import { configureStore } from '@reduxjs/toolkit'
import collegeRankingReducer from './collegeRanking'
import questionnaireReducer from './questionnaire'
import contextReducer from './context'

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer,
        collegeRanking: collegeRankingReducer,
        context: contextReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
