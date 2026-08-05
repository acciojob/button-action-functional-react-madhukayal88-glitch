import React, { useState } from 'react';
import './styles.css';

function App() {
  // State to manage paragraph visibility
  const [showParagraph, setShowParagraph] = useState(false);

  // Handle button click
  const handleClick = () => {
    setShowParagraph(true);
  };

  return (
    <div className="app-container">
      <h1>🎯 Functional Components & Hooks</h1>
      <p className="subtitle">Click the button to reveal the message</p>
      
      <div className="button-container">
        <button 
          id="click" 
          onClick={handleClick}
          className="show-btn"
        >
          Click me!
        </button>
      </div>

      <div className="para-container">
        {showParagraph && (
          <p id="para" className="message-para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
          </p>
        )}
      </div>

      <div className="footer">
        <p>💡 Using useState Hook for conditional rendering</p>
      </div>
    </div>
  );
}

export default App;
