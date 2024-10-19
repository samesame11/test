import React from 'react';
import P3 from './P3.png';

// Function to simulate the spread of a virus in a grid
const process = (
  sizeX: number,
  sizeY: number,
  elementX: number,
  elementY: number
): number => {
  // Default value: all elements are not infected; default is false
  let elements: boolean[][] = Array.from({ length: sizeX }, () =>
    Array(sizeY).fill(false)
  );
  // Start point of virus
  elements[elementX - 1][elementY - 1] = true;
  let isVirusSpreadToAllElements = false;
  const tempElements: boolean[][] = Array.from({ length: sizeX }, () =>
    Array(sizeY).fill(false)
  );
  let day = 1;

  while (!isVirusSpreadToAllElements) {
    let tempIsVirusSpreadToAllElements = true;

    for (let i = 0; i < sizeX; i++) {
      for (let j = 0; j < sizeY; j++) {
        // Check for not infected element
        if (!elements[i][j]) {
          // It means still have not infected
          tempIsVirusSpreadToAllElements = false;
          continue;
        }

        tempElements[i][j] = true;

        // Spread to neighboring cells
        if (i - 1 >= 0) {
          // Up
          tempElements[i - 1][j] = true;
          if (j - 1 >= 0) tempElements[i - 1][j - 1] = true; // Top-left
          if (j + 1 < sizeY) tempElements[i - 1][j + 1] = true; // Top-right
        }
        if (i + 1 < sizeX) {
          // Down
          tempElements[i + 1][j] = true;
          if (j - 1 >= 0) tempElements[i + 1][j - 1] = true; // Bottom-left
          if (j + 1 < sizeY) tempElements[i + 1][j + 1] = true; // Bottom-right
        }
        if (j - 1 >= 0) tempElements[i][j - 1] = true; // Left
        if (j + 1 < sizeY) tempElements[i][j + 1] = true; // Right
      }
    }

    day += 1;
    isVirusSpreadToAllElements = tempIsVirusSpreadToAllElements;
    elements = tempElements;
    // // Update infected elements for the next day
    // for (let x = 0; x < sizeX; x++) {
    //   for (let y = 0; y < sizeY; y++) {
    //     elements[x][y] = tempElements[x][y];
    //   }
    // }
  }

  return day;
};

// React component
const VirusSpreadSimulation: React.FC = () => {
  const example1 = process(4, 6, 2, 4);
  const example2 = process(3, 4, 1, 2);

  return (
    <div>
      <img alt="P3" src={P3}></img>
      <div style={{ margin: '20px' }}>
        <p>Output: {example1} days</p>
        <p>Output: {example2} days</p>
      </div>
    </div>
  );
};

export default VirusSpreadSimulation;
