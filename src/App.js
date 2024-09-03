import React, { useState } from 'react';

const App = () => {
  // Initial dictionary state
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // State to hold the search input and result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Function to handle the search
  const handleSearch = () => {
    // Find the word in the dictionary, case-insensitively
    const found = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());

    // Set the result based on whether the word is found
    if (found) {
      setResult(found.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dictionary App</h1>
      <input 
        type="text" 
        placeholder="Search for a word..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      <p>{result}</p>
    </div>
  );
}

export default App;
