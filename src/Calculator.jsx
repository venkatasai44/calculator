import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+', 'C'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={btn === '=' ? 'equal' : btn === 'C' ? 'clear' : ''}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
