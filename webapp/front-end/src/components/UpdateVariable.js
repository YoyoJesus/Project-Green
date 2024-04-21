import React, { useState } from 'react';
import { updateVariable } from '../utils/api';

const UpdateVariable = () => {
  const [newValue, setNewValue] = useState('');

  const handleUpdate = async () => {
    try {
      await updateVariable(newValue);
      setNewValue('');
    } catch (error) {
      console.error('Error updating variable:', error);
    }
  };

  const handleInputChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={newValue} onChange={handleInputChange} />
      <button onClick={handleUpdate}>Update Variable</button>
    </div>
  );
};

export default UpdateVariable;
