import React, { useState } from 'react';
import axios from 'axios';

function CollegePreferences() {
  const [major, setMajor] = useState('');
  const [preference, setPreference] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/submit-response/', {
        major,
        preference
      });
      alert(`Top 10 College Recommendations: ${response.data.rankings}`);
    } catch (error) {
      console.error('Error submitting preferences:', error);
    }
  };

  return (
    <div>
      <h2>My College Ranking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Major: </label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div>
          <label>Preference: </label>
          <select value={preference} onChange={(e) => setPreference(e.target.value)}>
            <option value="">Select...</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit">Get College Recommendations</button>
      </form>
    </div>
  );
}

export default CollegePreferences;
