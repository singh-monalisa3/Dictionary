import React, { useState } from 'react';
import './App.css'; // Include your CSS styles

function App() {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for the search input and the result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  const [found, setFound] = useState(false); // Track if the word was found

  // Handle search functionality
  const handleSearch = () => {
    // Convert search term to lowercase for case-insensitive search
    const search = searchTerm.toLowerCase();
    // Find the word in the dictionary
    const foundWord = dictionary.find(item => item.word.toLowerCase() === search);

    // Update the result state based on whether the word is found
    if (foundWord) {
      setResult(foundWord.meaning);
      setFound(true);
    } else {
      setResult("Word not found in the dictionary.");
      setFound(false);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result">
        {found ? (
          <p>Definition: {result}</p>
        ) : (
          result && <p>{result}</p> // Display only the "Word not found" message if not found
        )}
      </div>
    </div>
  );
}

export default App;

