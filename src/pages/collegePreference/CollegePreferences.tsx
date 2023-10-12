import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'

function CollegePreferences() {
    const [major, setMajor] = useState('')
    const [preference, setPreference] = useState('')

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const response = await axios.post('/submit-response/', {
                major,
                preference,
            })
            alert(`Top 10 College Recommendations: ${response.data.rankings}`)
        } catch (error) {
            console.error('Error submitting preferences:', error)
        }
    }

    return (
        <div className='container py-5'>
            <h2>My College Ranking</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className='form-group'>
                    <label>Major:</label>
                    <input
                        type='flex-1'
                        className='form-control'
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Preference:</label>
                    <select
                        className='form-control'
                        value={preference}
                        onChange={(e) => setPreference(e.target.value)}
                    >
                        <option value=''>Select...</option>
                        <option value='public'>Public</option>
                        <option value='private'>Private</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Get College Recommendations
                </button>
            </form>
        </div>
    )
}

export default CollegePreferences
