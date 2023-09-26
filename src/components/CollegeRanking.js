import { useState } from 'react';

function CollegeRanking() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="college-ranking">
        <h1>Welcome to My College Ranking</h1>
        {/* Descriptive text and images here */}
        <button onClick={() => setStarted(true)}>Get Started</button>
      </div>
    );
  } else {
    return (
      <div className="questionnaire">
        {/* You'll place your questions and form here */}
        <label>
          What's your major?
          <input type="text" />
        </label>
        <label>
          Do you prefer a public or private university?
          <select>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default CollegeRanking;
