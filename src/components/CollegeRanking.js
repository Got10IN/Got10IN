import React, { useState } from 'react';
import axios from 'axios';

function CollegeRanking() {
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
    <div className="container py-5">
      <h2>College Ranking</h2>
      <p>Discover the top colleges based on your preferences.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Major:</label>
          <input
            type="text"
            className="form-control"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Preference:</label>
          <select className="form-control" value={preference} onChange={(e) => setPreference(e.target.value)}>
            <option value="">Select...</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Get College Rankings</button>
      </form>
    </div>
  );
}

export default CollegeRanking;
