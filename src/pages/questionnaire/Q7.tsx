import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q7Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { updateQ7 } from '../../utils/redux/questionnaire'
import { FormTitle, MultiSelectGrid } from './components'

const Q7 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

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
                7. What type(s) of school do you prefer?
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
