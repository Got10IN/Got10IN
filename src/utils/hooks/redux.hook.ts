import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useReduxContext = () => useAppSelector((state) => state.context)
export const useCollegeRanking = () =>
    useAppSelector((state) => state.collegeRanking)
export const useQuestionnaire = () =>
    useAppSelector((state) => state.questionnaire)
