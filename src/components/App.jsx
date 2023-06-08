import './App.css';
import React, { useState } from 'react';


function App () {
  const [input, setInput] = useState('');

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setInput(input + operator);
    }
  };

  const handleClearClick = () => {
    setInput('');
  };

  const handleCalculateClick = () => {
    try {
      const calculatedResult = calculate(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Ошибка');
    }
  };

  const calculate = (input) => {
    let values = input.split(/(\+|-|\*|\/)/);
    let result = parseFloat(values[0].trim());

    for (let i = 1; i < values.length; i += 2) {
      const operator = values[i].trim();
      const number = parseFloat(values[i + 1].trim());

      if (operator === '+') {
        result += number;
      } else if (operator === '-') {
        result -= number;
      } else if (operator === '*') {
        result *= number;
      } else if (operator === '/') {
        result /= number;
      }
    }

    return result;
  };

  return (
  <>
    <div className="App calculator">
      <input type="text" value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder={'0'}/>
      <button onClick={handleNumberClick.bind(null, '1')}>1</button>
      <button onClick={handleNumberClick.bind(null, '2')}>2</button>
      <button onClick={handleNumberClick.bind(null, '3')}>3</button>
      <button onClick={handleNumberClick.bind(null, '4')}>4</button>
      <button onClick={handleNumberClick.bind(null, '5')}>5</button>
      <button onClick={handleNumberClick.bind(null, '6')}>6</button>
      <button onClick={handleNumberClick.bind(null, '7')}>7</button>
      <button onClick={handleNumberClick.bind(null, '8')}>8</button>
      <button onClick={handleNumberClick.bind(null, '9')}>9</button>
      <button onClick={handleNumberClick.bind(null, '0')}>0</button>
      <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
      <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
      <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
      <button onClick={handleCalculateClick}>=</button>
      <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
      <button onClick={handleClearClick}>C</button>
    </div>
  </>
  );
}

export default App;
