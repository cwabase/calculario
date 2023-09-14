    
// JavaScript code to handle form logic and calculations  
// Get input fields
const percentOfXInput = document.getElementById('x-percent');
const percentOfYInput = document.getElementById('y-number');

const percentChangeXInput = document.getElementById('x-original');  
const percentChangeYInput = document.getElementById('y-new');

const increaseDecreaseXInput = document.getElementById('x-base');
const increaseDecreaseYInput = document.getElementById('y-percentage');

const xIsPercentOfXInput = document.getElementById('x-part');
const xIsPercentOfYInput = document.getElementById('y-whole');

const xIsYPercentOfXInput = document.getElementById('x-number');
const xIsYPercentOfYInput = document.getElementById('y-percent');

const percentDiffXInput = document.getElementById('x-first');
const percentDiffYInput = document.getElementById('y-second');

// Get radio inputs 
const percentOfRadio = document.getElementById('percent-of');
const percentChangeRadio = document.getElementById('percent-change');  
const increaseDecreaseRadio = document.getElementById('increase-decrease');
const xIsPercentRadio = document.getElementById('x-is-percent');
const xIsYPercentRadio = document.getElementById('x-is-y-percent');
const percentDiffRadio = document.getElementById('percent-difference');

// Get input sections
const percentOfSection = document.getElementById('percent-of-inputs');
const percentChangeSection = document.getElementById('percent-change-inputs');
const increaseDecreaseSection = document.getElementById('increase-decrease-inputs');  
const xIsPercentSection = document.getElementById('x-is-percent-inputs');
const xIsYPercentSection = document.getElementById('x-is-y-percent-inputs');
const percentDiffSection = document.getElementById('percent-difference-inputs');

// Get results div
const resultsDiv = document.getElementById('results');

// Calculate button
const calculateBtn = document.getElementById('calculate-btn');

// Initially show percent of section
percentOfSection.style.display = 'block';

// Add event listeners to radio inputs
percentOfRadio.addEventListener('click', () => {
  toggleSections(percentOfSection);
});

percentChangeRadio.addEventListener('click', () => {
  toggleSections(percentChangeSection);  
});

increaseDecreaseRadio.addEventListener('click', () => {
  toggleSections(increaseDecreaseSection);
});

xIsPercentRadio.addEventListener('click', () => {
  toggleSections(xIsPercentSection);
});

xIsYPercentRadio.addEventListener('click', () => {
  toggleSections(xIsYPercentSection); 
});

percentDiffRadio.addEventListener('click', () => {
  toggleSections(percentDiffSection);
});

// Toggle input sections
function toggleSections(sectionToShow) {
  const sections = document.getElementsByClassName('input-section');
  
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';  
  }
  
  sectionToShow.style.display = 'block';
}

// Calculate button click handler
calculateBtn.addEventListener('click', () => {

  resultsDiv.innerHTML = '';

  let result, calculationText;

  if (percentOfRadio.checked) {
    // X percent of Y calculation
    const x = parseFloat(percentOfXInput.value);
    const y = parseFloat(percentOfYInput.value);
    result = y * (x / 100);
    calculationText = `${x}% of ${y} is ${result}`;

  } else if (percentChangeRadio.checked) {
    // Percent change calculation
    const x = parseFloat(percentChangeXInput.value);
    const y = parseFloat(percentChangeYInput.value);
    const percentChange = (y - x) / x * 100;
    result = percentChange;
    calculationText = `The percent change from ${x} to ${y} is ${result}%`;
    
  } else if (increaseDecreaseRadio.checked) {
    // Increase/decrease calculation 
    const x = parseFloat(increaseDecreaseXInput.value);
    const y = parseFloat(increaseDecreaseYInput.value);
    if (y > 0) {
      // Increase
      result = x + (x * y / 100);
      calculationText = `Increasing ${x} by ${y}% is ${result}`;  
    } else {
      // Decrease  
      result = x - (x * Math.abs(y) / 100);
      calculationText = `Decreasing ${x} by ${Math.abs(y)}% is ${result}`;
    }

  } else if (xIsPercentRadio.checked) {
    // X is what percent of Y
    const x = parseFloat(xIsPercentOfXInput.value);
    const y = parseFloat(xIsPercentOfYInput.value);
    result = (x / y) * 100;
    calculationText = `${x} is ${result}% of ${y}`;

  } else if (xIsYPercentRadio.checked) {
    // X is Y percent of what number
    const x = parseFloat(xIsYPercentOfXInput.value); 
    const y = parseFloat(xIsYPercentOfYInput.value);
    result = x / (y / 100);
    calculationText = `${x} is ${y}% of ${result}`;

  } else if (percentDiffRadio.checked) {
    // Percentage difference 
    const x = parseFloat(percentDiffXInput.value);
    const y = parseFloat(percentDiffYInput.value);
    const diff = Math.abs(x - y);
    const avg = (x + y) / 2; 
    result = (diff / avg) * 100;
    calculationText = `The percentage difference between ${x} and ${y} is ${result}%`; 
  }

  // Add result text
  resultsDiv.innerHTML = `
    <h3>Calculation Results</h3>
    <p>${calculationText}</p>
    <p><b>Result: ${result}</b></p>
  `;

});
