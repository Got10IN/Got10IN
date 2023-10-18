import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q9Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { updateQ9 } from '../../utils/redux/questionnaire'
import { FormTitle, MultiSelectGrid } from './components'

const Q9 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

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
