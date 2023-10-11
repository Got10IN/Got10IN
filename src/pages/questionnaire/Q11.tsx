import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { Q11Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { updateQ11 } from '../../utils/redux/questionnaire'
import { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import { FormTitle, MultiSelectGrid, SingleSelectGrid } from './components'

const Q11 = () => {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ11([
                {
                    options: [selectedOption],
                },
                {
                    options: selectedOptions,
                },
            ])
        )
    }, [selectedOptions, selectedOption])

    useEffect(() => {
        const [selectedOption, selectedOptions] = questionnaire.q11
        if (selectedOption.options.length > 0) {
            setSelectedOption(selectedOption.options[0])
        }
        setSelectedOptions(selectedOptions.options)
    }, [])

    return (
        <Fragment>
            <FormTitle>11. Are you looking at:</FormTitle>
            <SingleSelectGrid
                initialOptions={initialOptions.part1}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <FormTitle>
                Among all the questions you answered, which ones do you think
                matter to you the most?
            </FormTitle>
            <MultiSelectGrid
                initialOptions={initialOptions.part2}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Fragment>
    )
}

export default Q11
