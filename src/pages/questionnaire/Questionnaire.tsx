import axios from 'axios'
import { Suspense, lazy, useState } from 'react'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { ICollegeRanking } from '../../interface/ICollegeRanking'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { resetQuestion } from '../../utils/redux/questionnaire'
import { generatePrompt } from '../../utils/requests/openai/generatePrompt'
import { parseQuesionnaire } from '../../utils/requests/openai/parseQuestionnaire'
import { updateState } from '../../utils/redux/collegeRanking'
import { OpenAIAPIKey } from '../../utils/constants/api'

const Questionnaire = () => {
    const [currQuestion, setCurrQuestion] = useState(1)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const Questions = [
        lazy(() => import('./Q1')),
        lazy(() => import('./Q2')),
        lazy(() => import('./Q3')),
        lazy(() => import('./Q4')),
        lazy(() => import('./Q5')),
        lazy(() => import('./Q6')),
        lazy(() => import('./Q7')),
        lazy(() => import('./Q8')),
        lazy(() => import('./Q9')),
        lazy(() => import('./Q10')),
        lazy(() => import('./Q11')),
    ]

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

        setCurrQuestion(currQuestion + 1)
    }

    const nextQuestionHandler = () => {
        if (currQuestion < 11) {
            setCurrQuestion(currQuestion + 1)
        } else {
            onSubmitHandler()
        }
    }

    const progressBarStyle = {
        width: `${(currQuestion / Questions.length) * 100}%`,
    }

    const onSubmitHandler = () => {
        const payload = parseQuesionnaire(questionnaire)
        const prompt = generatePrompt(payload)

        const data = {
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            max_tokens: 150,
            temperature: 0,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${OpenAIAPIKey}`,
            },
        }

        axios
            .post('https://api.openai.com/v1/completions', data, config)
            .then((response) => {
                if (response.status === 200) {
                    console.log('response', response)
                    return response.data.choices[0].text
                } else {
                    throw new Error('The API request failed')
                }
            })
            .then((data: string) => {
                const split = data.split('\n')
                const ranking: ICollegeRanking = []

                split
                    .slice(split.length - 10)
                    .map((entry) => {
                        return entry.split('. ')
                    })
                    .forEach((entry) => {
                        ranking.push(entry[1].replace(/\([^)]*\)/g, '').trim())
                    })
                dispatch(updateState(ranking))
                localStorage.setItem('rankings', JSON.stringify(ranking))
            })
            .then(() => {
                navigate('/my-college-ranking/result')
            })
            .catch((error) => {
                console.log('request errored')
            })
    }

    const CurrQuestion = Questions[currQuestion - 1]

    const isLastQuestion = currQuestion === 11

    return (
        <div className='w-full pt-3/20 pb-1/10 bg-white sm:pt-48'>
            <div className='w-1/2 mx-[25%] sm:mx-10 sm:w-auto flex flex-col gap-12'>
                <div
                    className='Q-center-container'
                    style={{ paddingBottom: '3%' }}
                >
                    <div className='w-full flex items-center m-auto gap-1/20'>
                        <div className='text-sm font-bold text-text-61 sm:hidden'>
                            Progress
                        </div>
                        <div className='rounded-full w-9/10 h-3 shadow-progress'>
                            <div
                                className={`h-full bg-accent-light transition-all duration-300 ease-in rounded-full`}
                                style={progressBarStyle}
                            />
                        </div>
                        <div className='text-sm text-text-88'>{`${currQuestion}/${Questions.length}`}</div>
                    </div>
                </div>
                <Suspense
                    fallback={<div className='min-h-[300px]'>loading</div>}
                >
                    <div className='min-h-[300px]'>{<CurrQuestion />}</div>
                </Suspense>

                <div className='flex justify-between items-center mt-4'>
                    <button
                        className='text-accent-dark font-semibold text-sm w-20 h-8 py-2 hover:bg-accent-light duration-150 border-accent border-2 rounded-3xl flex justify-center items-center cursor-pointer align-middle sm:hidden'
                        onClick={exitHandler}
                    >
                        Exit
                    </button>
                    <button
                        className='group w-20 h-8 py-2 text-accent hover:bg-accent-light duration-150 border-accent border-2 rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold'
                        onClick={prevQuestionHandler}
                    >
                        <BiSolidChevronLeft className='inline mr-3 flex-none group-hover:-translate-x-2 duration-150' />
                    </button>
                    <div className='flex gap-8'>
                        {!isLastQuestion && (
                            <button
                                className='text-accent-dark font-semibold text-sm w-20 h-8 py-2 hover:bg-accent-light duration-150 border-accent border-2 sm:border-none rounded-3xl flex justify-center items-center cursor-pointer align-middle'
                                onClick={skipQuestionHandler}
                            >
                                Skip
                            </button>
                        )}
                        <button
                            className='group w-20 h-8 py-2 text-white bg-accent-dark rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold'
                            onClick={nextQuestionHandler}
                        >
                            {isLastQuestion ? (
                                'Submit'
                            ) : (
                                <BiSolidChevronRight className='inline ml-3 flex-none group-hover:translate-x-2 duration-150' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire