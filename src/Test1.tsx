import React from 'react';
import P1 from './Q1.png';
import './App.css';

// Function to process the input similar to the Java method
const process = (k: number): number => {
  if (k > 0) {
    return k + process(k - 1);
  } else {
    return 0;
  }
};

const showNum = (num: number): string => {
  let text = '';
  for (let i = 1; i <= num; i++) {
    text += i; // Append the current number
    if (i < num) {
      text += '+'; // Append '+' if it's not the last number
    }
  }
  return text;
};

// React component
const Test1: React.FC = () => {
  const Q: number[] = [1, 2, 3, 4];

  return (
    <div>
      <img height="200px" alt="Q1" src={P1} />
      {Q.map((value: number) => (
        <p key={value} style={{ margin: '20px' }}>
          {showNum(value)} = {process(value)}
        </p>
      ))}
    </div>
  );
};

export default Test1;
