import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q8Options as initialOptions } from '../../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux.hook'
import { updateQ8 } from '../../../utils/redux/questionnaire'
import { FormTitle, MultiSelectGrid } from './components'

const Q8 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ8({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q8.options

        setSelectedOptions(options)
    }, [])

    return (
        <Fragment>
            <FormTitle>
                8. What's your ideal tuition range?
            </FormTitle>
            <MultiSelectGrid
                initialOptions={initialOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Fragment>
    )
}

export default Q8
