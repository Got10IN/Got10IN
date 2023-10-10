import { useEffect, useState } from 'react'
import './Questionaire.css'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'

const Q7 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const handleOptionSelect = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            )
        } else {
            setSelectedOptions([...selectedOptions, option])
        }
    }

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q7: {
                options: selectedOptions,
            },
        })
    }, [selectedOptions])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text' style={{ paddingBottom: '2%' }}>
                7. What type(s) of college do you prefer?
            </p>
            <label>
                <input
                    type='checkbox'
                    value='Public'
                    checked={selectedOptions.includes('Public')}
                    onChange={() => handleOptionSelect('Public')}
                />
                Public
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='Private'
                    checked={selectedOptions.includes('Private')}
                    onChange={() => handleOptionSelect('Private')}
                />
                Private
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='Liberal arts'
                    checked={selectedOptions.includes('Liberal arts')}
                    onChange={() => handleOptionSelect('Liberal arts')}
                />
                Liberal arts
            </label>
        </div>
    )
}

export default Q7
