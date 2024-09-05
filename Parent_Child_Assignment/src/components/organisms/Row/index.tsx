import React, { useState } from 'react';
import '../../../App.css';
import Row from '../../molecules/RowTab/index.tsx';
import Header from '../../molecules/Header/index.tsx';
import styled from 'styled-components';
// import { ReactComponent as MarkIcon } from '../../atoms/CheckBox/Markicon.svg';

const StyledDiv = styled.div`
  background-color:rgba(102,61,165,255);
  color: white;
`;

const info = [
  ["Name", "Type", "Per Payment", "Term length", "Payment"],
  ["Contract 1", "Monthly", "$12000", "12 months(12.0% fee)", "$63300"],
  ["Contract 6", "Monthly", "$6000", "12 months(12.0% fee)", "$63300"],
  ["Contract 5", "Monthly", "$6000", "12 months(12.0% fee)", "$63300"],
  ["Contract 4", "Monthly", "$6000", "12 months(12.0% fee)", "$63300"],
  ["Contract 3", "Monthly", "$6000", "12 months(12.0% fee)", "$63300"],
  ["Contract 2", "Monthly", "$6000", "12 months(12.0% fee)", "$21100"]
];

export default function Index() {
  const [state, setState] = useState(false);
  const [rowStates, setRowStates] = useState(Array(info.length));

  const handleCheckboxChange = (index, isChecked) => {

    if (index === 0) 
      {
      setState(isChecked);
      setRowStates(Array(info.length).fill(isChecked));
    } else 
    {
      const updatedRowStates = [...rowStates];


      updatedRowStates[index] = isChecked;
      setRowStates(updatedRowStates);
      if (!isChecked) {
        setState(false);
      }
    }
  };

  return (
    <div className='mainorg'>
      <Header size={30} text={"Your Data"} />
      <table>
        {info.map((ar, i) => (
          <Row
            key={i}
            data={ar}
            i={i}
            state={state}
            isChecked={rowStates[i]}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </table>
    </div>
  );
}

