import { ReactNode, createContext } from 'react'
import { IQuestionaire } from '../interface/IQuestionaire'
import { Questionaire } from '../class/Questionaire.class'

const QuestionaireContext = createContext<IQuestionaire>(new Questionaire())

export const QuestionaireContextProvider = ({ children }: { children: ReactNode }) => {

    return (
        <QuestionaireContext.Provider value={new Questionaire()}>
            {children}
        </QuestionaireContext.Provider>
    )
}
export default QuestionaireContext
