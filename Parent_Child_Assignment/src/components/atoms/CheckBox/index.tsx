import React from 'react';
import CheckBox from '@mui/material/Checkbox';

export default function CustomCheckBox({ checked, onChange}) {
  return (
    <CheckBox 
      checked={checked} 
      onChange={onChange} 
      style={{ color: 'white' }} 
    />
  );
}

