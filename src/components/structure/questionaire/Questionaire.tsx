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
        <div
            className='Q-fullscreen-container'
            style={{ paddingTop: '15%', paddingBottom: '10%' }}
        >
            <div className='Q-center-container' style={{ paddingBottom: '3%' }}>
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
            <Suspense>{<CurrQuestion />}</Suspense>
            <div className='Q-center-container' style={{ paddingTop: '5%' }}>
                <button
                    className='small-button'
                    style={{
                        backgroundColor: '#96B2CF',
                        height: '10%',
                        padding: '1% 3%',
                        flex: '0.02',
                        marginRight: '15%',
                    }}
                    onClick={exitHandler}
                >
                    Exit
                </button>
                <div className='Q-Button-container' style={{ flex: '0.98' }}>
                    <button
                        className='small-button'
                        style={{
                            backgroundColor: '#96B2CF',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                        onClick={prevQuestionHandler}
                    >
                        <BiSolidChevronLeft />
                    </button>

                    <div className='skip-button-container'>
                        <button
                            className='small-text-blue'
                            onClick={skipQuestionHandler}
                        >
                            Skip
                        </button>
                    </div>
                    <button
                        className='small-button h-full'
                        style={{
                            backgroundColor: '#003362',
                            padding: '1% 4%',
                        }}
                        onClick={nextQuestionHandler}
                    >
                        <BiSolidChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Questionaire
