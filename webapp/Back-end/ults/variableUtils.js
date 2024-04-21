// variableUtils.js

const fs = require('fs');

async function updateVariable(newValue, fetchVariable) {
  console.log('New value:', newValue); // Add this line
  try {
    // Convert newValue to a string before writing to file
    const newValueString = newValue.toString();
    
    // Write the new value to variable.txt
    fs.writeFileSync('variable.txt', newValueString, 'utf8');
    
    // Send a POST request to update the variable value on the backend
    const response = await fetch('/api/updateVariable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newValue: newValueString }) // Pass the stringified newValue
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to update variable on the server');
    }

    // Call fetchVariable to update the value displayed on the frontend
    fetchVariable();
  } catch (error) {
    console.error('Error updating variable:', error);
  }
}

function getVariable() {
  try {
    const variableValue = fs.readFileSync('variable.txt', 'utf8');
    return variableValue;
  } catch (error) {
    console.error('Error reading variable:', error);
    return null;
  }
}

module.exports = {
  updateVariable,
  getVariable
};
