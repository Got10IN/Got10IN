import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux.hook'
import { resetQuestion } from '../../../utils/redux/questionnaire'

const Questionnaire = () => {
    const [currQuestion, setCurrQuestion] = useState(1)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const Questions = [
        lazy(() => import('../../../pages/questionnaire/Q1')),
        lazy(() => import('../../../pages/questionnaire/Q2')),
        lazy(() => import('../../../pages/questionnaire/Q3')),
        lazy(() => import('../../../pages/questionnaire/Q4')),
        lazy(() => import('../../../pages/questionnaire/Q5')),
        lazy(() => import('../../../pages/questionnaire/Q6')),
        lazy(() => import('../../../pages/questionnaire/Q7')),
        lazy(() => import('../../../pages/questionnaire/Q8')),
        lazy(() => import('../../../pages/questionnaire/Q9')),
        lazy(() => import('../../../pages/questionnaire/Q10')),
        lazy(() => import('../../../pages/questionnaire/Q11')),
    ]

    const progressBarStyle = {
        width: `${(currQuestion / Questions.length) * 100}%`,
    }

    const questionnaire = useAppSelector((state) => state.questionnaire.value)

    const exitHandler = () => {
        navigate('/my-college-ranking')
    }

    const prevQuestionHandler = () => {
        if (currQuestion > 1) {
            setCurrQuestion(currQuestion - 1)
        }
    }

    const skipQuestionHandler = () => {
        dispatch(resetQuestion(currQuestion + 1))
        if (currQuestion < 11) {
            setCurrQuestion(currQuestion + 1)
        }
    }

    const nextQuestionHandler = () => {
        if (currQuestion < 11) {
            setCurrQuestion(currQuestion + 1)
        } else {
            onSubmitHandler()
        }
    }

    const onSubmitHandler = () => {
        console.log(questionnaire)
        // fetch(' the api goes in here ')
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             throw new Error('Request Failed')
        //         }
        //     })
        //     .then((data) => {
        //         //do something with the data
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    const CurrQuestion = Questions[currQuestion - 1]

    return (
        <div className='w-full min-h-scree pt-[15%] pb-[10%] bg-white'>
            <div className='w-1/2 mx-[25%] flex flex-col gap-12'>
                <div
                    className='Q-center-container'
                    style={{ paddingBottom: '3%' }}
                >
                    <div className='progress-container'>
                        <div className='progress-title'>Progress</div>
                        <div className='barbackground'>
                            <div
                                className='progress-fill'
                                style={progressBarStyle}
                            ></div>
                        </div>
                        <div className='progress-text'>{`${currQuestion}/${Questions.length}`}</div>
                    </div>
                </div>
                <Suspense fallback={<div className='h-screen'>loading</div>}>
                    {<CurrQuestion />}
                </Suspense>
                <div className='flex justify-between mt-4'>
                    <button
                        className='w-20 h-8 py-2 text-white bg-accent-light rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold'
                        onClick={exitHandler}
                    >
                        Exit
                    </button>
                    <div className='flex justify-between items-center basis-1/2'>
                        <button
                            className='w-20 h-8 py-2 text-white bg-accent-light rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold'
                            onClick={prevQuestionHandler}
                        >
                            <BiSolidChevronLeft className='inline mr-3 flex-none' />
                        </button>

                        <button
                            className='small-text-blue'
                            onClick={skipQuestionHandler}
                        >
                            Skip
                        </button>

                        <button
                            className='w-20 h-8 py-2 text-white bg-accent-dark rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold'
                            onClick={nextQuestionHandler}
                        >
                            {currQuestion === 11 ? (
                                'Submit'
                            ) : (
                                <BiSolidChevronRight className='inline ml-3 flex-none' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire