import { useEffect, useState } from 'react'
import './Questionaire.css'
import { TendencySlider } from './components'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'

const Q6 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q6: {
                tendency: tendencyValue,
            },
        })
    }, [tendencyValue])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text'>6. What's your ideal college vibe?</p>
            <p className='small-text'>*Your Tendency: {tendencyValue}</p>
            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Hardcore'
                labelTrailing='🥳 Party'
            />
        </div>
    )
}

export default Q6
