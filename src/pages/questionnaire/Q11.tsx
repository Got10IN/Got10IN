import { useEffect, useState } from 'react'
import './Questionaire.css'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'

const Q11 = () => {
    const [selectedOptions1, setSelectedOptions1] = useState<string[]>([])
    const [selectedOptions2, setSelectedOptions2] = useState<string[]>([])

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q11: [
                {
                    options: selectedOptions1,
                },
                {
                    options: selectedOptions2,
                },
            ],
        })
    }, [selectedOptions1, selectedOptions2])

    return <div className='Q-left-container'></div>
}

export default Q11
