import { Dispatch, SetStateAction, useContext } from 'react'
import QuestionaireContext from '../../context/Questionaire.context'
import { IQuestionaire } from '../../interface/IQuestionaire'

export const useQuestionaireContext = (): [
    questionaire: IQuestionaire,
    setQuestionaire: Dispatch<SetStateAction<IQuestionaire>>
] => {
    const { questionaire, setQuestionaire } = useContext(QuestionaireContext)

    return [questionaire, setQuestionaire]
}
