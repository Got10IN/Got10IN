import { ChangeEvent, useEffect, useState } from 'react'

export function FieldWithDropdown({ options, selectedOptions, onSelect }: any) {
    const [field, setField] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])

    useEffect(() => {
        setField('')
    }, [selectedOptions])

    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setField(inputValue)

        const filtered = options.filter((option: string) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        )

        setFilteredOptions(filtered)
    }

    const handleOptionClick = (option: string) => {
        onSelect(option)
    }

    return (
        <div>
            <input
                type='text'
                className='Q-form-control'
                placeholder='Start typing to search'
                value={field}
                onChange={handleFieldChange}
            />
            <div className='dropdown'>
                {filteredOptions.map((option, index) => (
                    <div
                        key={index}
                        className='dropdown-option'
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function TendencySlider({
    onValueChange,
    labelLeading,
    labelTrailing,
    width = 70,
}: {
    onValueChange: (newValue: number) => void
    labelLeading?: string
    labelTrailing?: string
    width?: number
}) {
    const [sliderValue, setSliderValue] = useState(50)

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value)
        setSliderValue(newValue)
        onValueChange(newValue)
    }

    return (
        <div className='tendency-slider' style={{ paddingTop: '2%' }}>
            <div className='slider-label'>{labelLeading}</div>
            <input
                type='range'
                min='0'
                max='100'
                value={sliderValue}
                onChange={handleSliderChange}
                step='1'
                className='Q-form-control'
                style={{ width: `${width}%` }}
            />
            <div className='slider-label'>{labelTrailing}</div>
        </div>
    )
}
