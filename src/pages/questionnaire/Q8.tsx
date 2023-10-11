import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ8 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'

const Q8 = () => {
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

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ8({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q8.options

        setSelectedOptions(options)
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text' style={{ paddingBottom: '2%' }}>
                8. What’s your ideal tuition range?
            </p>
            <label>
                <input
                    type='checkbox'
                    value='1'
                    checked={selectedOptions.includes('Below 15k/semester')}
                    onChange={() => handleOptionSelect('Below 15k/semester')}
                />
                Below 15k/semester
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='2'
                    checked={selectedOptions.includes('15-20k/semester')}
                    onChange={() => handleOptionSelect('15-20k/semester')}
                />
                15-20k/semester
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='3'
                    checked={selectedOptions.includes('20-25k/semester')}
                    onChange={() => handleOptionSelect('20-25k/semester')}
                />
                20-25k/semester
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='4'
                    checked={selectedOptions.includes('25-30k/semester')}
                    onChange={() => handleOptionSelect('25-30k/semester')}
                />
                25-30k/semester
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='5'
                    checked={selectedOptions.includes('Above 30k/semester')}
                    onChange={() => handleOptionSelect('Above 30k/semester')}
                />
                Above 30k/semester
            </label>
        </div>
    )
}

export default Q8
