import React from 'react';
import P2 from './P2.png';

// Function to process the input list into chunks and calculate sums
const processChunks = (numberList: number[], chunk: number): number[] => {
  const result: number[] = []; // Array to store the sums of each chunk

  // Loop through the list with steps of 'chunk'
  for (let i = 0; i < numberList.length; i += chunk) {
    let sum = 0; // Initialize the sum for this chunk

    // Loop through the current chunk
    for (let j = i; j < i + chunk; j++) {
      // Check if j is within the bounds of the list
      if (j < numberList.length) {
        sum += numberList[j]; // Add the current number to the sum
      }
    }
    result.push(sum); // Add the sum of this chunk to the result array
  }

  return result; // Return the array of sums
};

// React component
const Test2: React.FC = () => {
  const input1 = [1, 2, 3, 4, 5];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = [1, 2, 3, 4, 5];

  return (
    <div>
      <img height="200px" src={P2} alt="P2" />
      <div style={{ margin: '20px' }}>
        <p>Output 1: {JSON.stringify(processChunks(input1, 2))}</p>
        <p>Output 2: {JSON.stringify(processChunks(input2, 3))}</p>
        <p>Output 3: {JSON.stringify(processChunks(input3, 4))}</p>
      </div>
    </div>
  );
};

export default Test2;
