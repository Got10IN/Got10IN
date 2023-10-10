import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from 'react'
import { IQuestionaire } from '../interface/IQuestionaire'
import { CQuestionaire } from '../class/Questionaire.class'

const QuestionaireContext = createContext<{
    questionaire: IQuestionaire
    setQuestionaire: Dispatch<SetStateAction<IQuestionaire>>
}>({ questionaire: new CQuestionaire(), setQuestionaire: () => null })

export const QuestionaireContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [questionaire, setQuestionaire] = useState<IQuestionaire>(
        new CQuestionaire()
    )

    return (
        <QuestionaireContext.Provider value={{ questionaire, setQuestionaire }}>
            {children}
        </QuestionaireContext.Provider>
    )
}
export default QuestionaireContext
