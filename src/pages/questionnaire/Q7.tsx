import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { Q7Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { updateQ7 } from '../../utils/redux/questionnaire'
import { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import { FormTitle, MultiSelectGrid } from './components'

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

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ7({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q7.options

        setSelectedOptions(options)
    }, [])

    return (
        <Fragment>
            <FormTitle>
                7. What type(s) of college do you prefer?
            </FormTitle>
            <MultiSelectGrid
                initialOptions={initialOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Fragment>
    )
}

export default Q7
