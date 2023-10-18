import { configureStore } from '@reduxjs/toolkit'
import collegeRankingReducer from './collegeRanking'
import questionnaireReducer from './questionnaire'

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer,
        collegeRanking: collegeRankingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
