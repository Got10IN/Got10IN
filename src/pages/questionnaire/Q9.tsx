import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ9 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'
import { FormTitle, MultiSelectGrid } from './components'
import { Q9Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'

const Q9 = () => {
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
        dispatch(updateQ9({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q9.options

        setSelectedOptions(options)
    }, [])

    return (
        <Fragment>
            <FormTitle>
                9. What is the GPA range that meets your expectations for the
                school you wish to attend?
            </FormTitle>
            <MultiSelectGrid
                initialOptions={initialOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Fragment>
    )
}

export default Q9
