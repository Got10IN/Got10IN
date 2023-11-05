import { Combobox, Transition } from '@headlessui/react'
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { HiMiniChevronUpDown } from 'react-icons/hi2'
import { IoClose } from 'react-icons/io5'
import { IComponent } from '../../../../utils/types/IComponent'
import '../styles/Q-form-control.css'

export const FormTitle = ({ children, className }: IComponent) => (
    <p className={'text-text-dark font-bold mb-4 ' + className}>{children}</p>
)

export const FormSubtitle = ({ children, className }: IComponent) => (
    <p className={'text-text-dark font-semibold mb-4 ' + className}>
        {children}
    </p>
)

export const MultiSelectDropdownField = ({
    initialOptions,
    selectedOptions,
    setSelectedOptions,
    removeOptionHandler,
}: {
    initialOptions: string[]
    selectedOptions: string[]
    setSelectedOptions: Dispatch<SetStateAction<string[]>>
    removeOptionHandler: (index: number) => void
}) => {
    const [query, setQuery] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(initialOptions)

    useEffect(() => {
        setFilteredOptions(
            initialOptions.filter((option) => {
                return option.toLowerCase().includes(query.toLowerCase())
            })
        )
    }, [initialOptions, query])
    return (
        <Combobox
            value={selectedOptions}
            onChange={(v) => setSelectedOptions(v)}
            multiple
        >
            <div className='relative'>
                {selectedOptions.length > 0 && (
                    <ul className='flex flex-wrap gap-4 mb-4 whitespace-nowrap'>
                        {selectedOptions.map((option, index) => (
                            <li
                                key={index}
                                className='flex items-center gap-2 justify-center align-middle bg-accent text-white text-sm font-black rounded-full px-4 py-2'
                            >
                                <span>{option}</span>
                                <IoClose
                                    className='text-white cursor-pointer font-black scale-125'
                                    onClick={() => {
                                        removeOptionHandler(index)
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                )}
                <div className='relative'>
                    <Combobox.Input
                        className='rounded-lg w-full h-10 border-text border-[1px] border-solid px-3 py-2'
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        placeholder='Start typing to search'
                    />{' '}
                    <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                        <HiMiniChevronUpDown
                            className='h-5 w-5 text-gray-400'
                            aria-hidden='true'
                        />
                    </Combobox.Button>
                </div>

                <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                        {filteredOptions.length === 0 && query !== '' ? (
                            <div className='ml-8 relative cursor-default select-none py-2 text-gray-700'>
                                Nothing found.
                            </div>
                        ) : (
                            filteredOptions.map((option, index) => {
                                return (
                                    <Combobox.Option
                                        key={index}
                                        value={option}
                                        onClick={() => {
                                            setSelectedOptions([
                                                ...selectedOptions,
                                                option,
                                            ])
                                        }}
                                        className='ml-8 relative cursor-default select-none py-2 text-gray-900'
                                    >
                                        {option}
                                    </Combobox.Option>
                                )
                            })
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}

export const MultiSelectGrid = ({
    initialOptions,
    selectedOptions,
    setSelectedOptions,
}: {
    initialOptions: string[]
    selectedOptions: string[]
    setSelectedOptions: Dispatch<SetStateAction<string[]>>
}) => {
    const handleOptionSelect = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            )
        } else {
            setSelectedOptions([...selectedOptions, option])
        }
    }
    return (
        <ul className='flex flex-row flex-wrap gap-4 items-center'>
            {initialOptions.map((option) => {
                const selected = selectedOptions.includes(option)
                return (
                    <div
                        className={`${
                            selected
                                ? 'bg-accent-dark text-white'
                                : 'text-accent-dark  hover:bg-accent-light'
                        }   border-solid border-2 border-accent-dark text-bold cursor-pointer relative text-center rounded-2xl gap-2 duration-150 w-max px-4 py-2`}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </div>
                )
            })}
        </ul>
    )
}

export const SingleSelectGrid = ({
    initialOptions,
    selectedOption,
    setSelectedOption,
}: {
    initialOptions: string[]
    selectedOption: string
    setSelectedOption: Dispatch<SetStateAction<string>>
}) => {
    return (
        <ul className='flex flex-row flex-wrap gap-4 items-center'>
            {initialOptions.map((option) => {
                const selected = selectedOption === option
                return (
                    <div
                        className={`${
                            selected
                                ? 'bg-accent-dark text-white'
                                : 'text-accent-dark  hover:bg-accent-light'
                        }   border-solid border-2 w-max border-accent-dark text-bold cursor-pointer relative text-center rounded-2xl gap-2 duration-150 px-4 py-2`}
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                    </div>
                )
            })}
        </ul>
    )
}

export function TendencySlider({
    onValueChange,
    labelLeading,
    labelTrailing,
    initialValue = 50,
    width = 70,
}: {
    onValueChange: (newValue: number) => void
    labelLeading?: string
    labelTrailing?: string
    initialValue?: number
    width?: number
}) {
    const [sliderValue, setSliderValue] = useState(initialValue)

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value)
        setSliderValue(newValue)
        onValueChange(newValue)
    }

    return (
        <div
            className='flex items-center justify-between w-full mx-auto'
            style={{ paddingTop: '2%' }}
        >
            {labelLeading && (
                <div className='text-sm text-text-88 text-center'>
                    {labelLeading}
                </div>
            )}
            <input
                type='range'
                min='0'
                max='100'
                value={sliderValue}
                onChange={handleSliderChange}
                step='10'
                className='Q-form-control grow'
                style={{ width: `${width}%` }}
            />
            {labelTrailing && (
                <div className='text-sm text-text-88 text-center'>
                    {labelTrailing}
                </div>
            )}
        </div>
    )
}
