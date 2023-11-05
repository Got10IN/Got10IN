'use client'

import { useRouter } from 'next/navigation'
import { Suspense, useState } from 'react'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../utils/hooks/redux.hook'
import { updateState } from '../../../../utils/redux/collegeRanking'
import { resetQuestion } from '../../../../utils/redux/questionnaire'
import RankingRequest from '../../../../utils/requests/openai/MyCollegeRanking/RankingRequest'
import { ICollegeRanking } from '../../../../utils/types/ICollegeRanking'
import dynamic from 'next/dynamic'
import { useEffectOnce } from 'usehooks-ts'

const Questionnaire = () => {
    const [currQuestion, setCurrQuestion] = useState(1)

    const router = useRouter()
    const dispatch = useAppDispatch()

    const Questions = [
        dynamic(() => import('../questions/Q1')),
        dynamic(() => import('../questions/Q2')),
        dynamic(() => import('../questions/Q3')),
        dynamic(() => import('../questions/Q4')),
        dynamic(() => import('../questions/Q5')),
        dynamic(() => import('../questions/Q6')),
        dynamic(() => import('../questions/Q7')),
        dynamic(() => import('../questions/Q8')),
        dynamic(() => import('../questions/Q9')),
        dynamic(() => import('../questions/Q10')),
        dynamic(() => import('../questions/Q11')),
    ]

    const questionnaire = useAppSelector((state) => state.questionnaire.value)

    const exitHandler = () => {
        router.push('/my-college-ranking')
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
        const request = async (temperature: number = 0) => {
            RankingRequest(questionnaire, { temperature: temperature })
                .then((ranking: ICollegeRanking) => {
                    dispatch(updateState(ranking))
                    localStorage.setItem('rankings', JSON.stringify(ranking))
                })
                .then(() => {
                    router.push('/my-college-ranking/result')
                })
        }

        request().catch(() => {
            request(0.3).catch(() => {
                request(0.6).catch(() => {
                    console.log(
                        'reqest failed after three tries. if you are here, we apologize. please feel free to reach out to us for support.'
                    )
                })
            })
        })
    }

    const CurrQuestion = Questions[currQuestion - 1]

    const isLastQuestion = currQuestion === Questions.length

    useEffectOnce(() => {
        const keyStrokeListener = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                nextQuestionHandler()
            } else if (event.key === 'ArrowRight') {
                prevQuestionHandler()
            }
        }

        window.addEventListener('keyup', keyStrokeListener)

        return window.removeEventListener('keyup', keyStrokeListener)
    })

    return (
        <div className="w-full pt-3/20 pb-1/10 bg-white sm:pt-48">
            <div className="w-1/2 mx-[25%] sm:mx-10 sm:w-auto flex flex-col gap-12">
                <div
                    className="Q-center-container"
                    style={{ paddingBottom: '3%' }}
                >
                    <div className="w-full flex items-center m-auto gap-1/20">
                        <div className="text-sm font-bold text-text-61 sm:hidden">
                            Progress
                        </div>
                        <div className="rounded-full w-9/10 h-3 shadow-progress">
                            <div
                                className={`h-full bg-accent-light transition-all duration-300 ease-in rounded-full`}
                                style={progressBarStyle}
                            />
                        </div>
                        <div className="text-sm text-text-88">{`${currQuestion}/${Questions.length}`}</div>
                    </div>
                </div>

                <div className="min-h-[300px]">{<CurrQuestion />}</div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        className="text-accent-dark font-semibold text-sm w-20 h-8 py-2 hover:bg-accent-light duration-150 border-accent border-2 rounded-3xl flex justify-center items-center cursor-pointer align-middle sm:hidden"
                        onClick={exitHandler}
                    >
                        Exit
                    </button>
                    <button
                        className="group w-20 h-8 py-2 text-accent hover:bg-accent-light duration-150 border-accent border-2 rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold"
                        onClick={prevQuestionHandler}
                    >
                        <BiSolidChevronLeft className="inline mr-3 flex-none group-hover:-translate-x-2 duration-150" />
                    </button>
                    <div className="flex gap-8">
                        {!isLastQuestion && (
                            <button
                                className="text-accent-dark font-semibold text-sm w-20 h-8 py-2 hover:bg-accent-light duration-150 border-accent border-2 sm:border-none rounded-3xl flex justify-center items-center cursor-pointer align-middle"
                                onClick={skipQuestionHandler}
                            >
                                Skip
                            </button>
                        )}
                        <button
                            className="group w-20 h-8 py-2 text-white bg-accent-dark rounded-3xl flex justify-center items-center cursor-pointer align-middle font-semibold"
                            onClick={nextQuestionHandler}
                        >
                            {isLastQuestion ? (
                                'Submit'
                            ) : (
                                <BiSolidChevronRight className="inline ml-3 flex-none group-hover:translate-x-2 duration-150" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire
