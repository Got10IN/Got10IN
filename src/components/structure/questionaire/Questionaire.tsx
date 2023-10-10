import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionaireContext } from '../../../utils/hooks/QuestionaireContext.hook'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'

const Questionaire = () => {
    const [currQuestion, setCurrQuestion] = useState(1)

    const navigate = useNavigate()

    const exitHandler = () => {
        navigate('/my-college-ranking')
    }

    const prevQuestionHandler = () => {
        if (currQuestion > 1) {
            setCurrQuestion(currQuestion - 1)
        }
    }

    const skipQuestionHandler = () => {
        setQuestionaire({ ...questionaire, [currQuestion]: '' })
        if (currQuestion < 11) {
            setCurrQuestion(currQuestion + 1)
        }
    }

    const nextQuestionHandler = () => {
        if (currQuestion < 11) {
            setCurrQuestion(currQuestion + 1)
        }
    }

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

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        console.log(questionaire)
    }, [questionaire, currQuestion])

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
                        className='text-base w-fit h-fit px-4 py-1 font-semibold text-white bg-accent-light rounded-3xl block cursor-pointer align-middle'
                        onClick={exitHandler}
                    >
                        Exit
                    </button>
                    <div className='flex justify-between items-center basis-1/2'>
                        <BiSolidChevronLeft
                            className='w-fit h-fit pr-6 pl-3 py-2 font-semibold text-white bg-accent-light rounded-3xl block cursor-pointer align-middle'
                            onClick={prevQuestionHandler}
                        />

                        <button
                            className='small-text-blue'
                            onClick={skipQuestionHandler}
                        >
                            Skip
                        </button>

                        <BiSolidChevronRight
                            className='w-fit h-fit pl-6 pr-3 py-2 font-semibold text-white bg-accent-dark rounded-3xl block cursor-pointer align-middle'
                            onClick={nextQuestionHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionaire
