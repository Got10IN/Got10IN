import { useEffect, useState } from 'react'
import './Questionaire.css'
import { TendencySlider } from './components'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'
import { IQTendency } from '../../interface/IQuestionaire'

const Q10 = () => {
    const [tendencyValue, setTendencyValue] = useState(0)

    const [tendencyValues, setTendencyValues] = useState<IQTendency[]>([
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
    ])

    const handleTendencyChange = (value: number, index: number) => {
        setTendencyValue(value)
        setTendencyValues([
            ...tendencyValues.slice(0, index),
            { tendency: value },
            ...tendencyValues.slice(index + 1),
        ])
    }

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q10: tendencyValues,
        })
    }, [tendencyValues])

    return (
        <div className='Q-left-container'>
            <p className='main-text' style={{ paddingBottom: '1%' }}>
                10. How much do the following factors matter to you?
            </p>
            <div className='Q-slider-container'>
                {factors.map((factor, index) => {
                    return (
                        <section key={factor}>
                            <p className='main-text'>{factor}</p>
                            <TendencySlider
                                onValueChange={(value) =>
                                    handleTendencyChange(value, index)
                                }
                                width={100}
                            />
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

const factors: string[] = [
    'Diversity',
    'Food',
    'Safety',
    'Career path',
    'Research opportunieis',
    'School reputation',
    'Sports culture',
]

export default Q10
