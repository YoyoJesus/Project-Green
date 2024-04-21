export const fetchVariable = async () => {
    const response = await fetch('http://localhost:3001/variable');
    const data = await response.text();
    return data;
  };
  
  export const updateVariable = async (newValue) => {
    await fetch('http://localhost:3001/updateVariable', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: newValue,
    });
  };
  