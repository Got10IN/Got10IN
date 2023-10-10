import { useEffect, useState } from 'react'
import './Questionaire.css'
import { TendencySlider } from './components'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'

const Q5 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q5: {
                tendency: tendencyValue,
            },
        })
    }, [tendencyValue])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text'>
                5. What kind of lifestyle do you prefer?
            </p>
            <p className='small-text'>*Your Tendency: {tendencyValue}</p>
            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Rural'
                labelTrailing='🥳 Urban'
            />
        </div>
    )
}

export default Q5
