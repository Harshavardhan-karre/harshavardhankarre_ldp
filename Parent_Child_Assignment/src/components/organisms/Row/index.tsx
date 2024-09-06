import React, { useState } from 'react';
import '../../../App.css';
import Row from '../../molecules/RowTab/index.tsx';
import styled from 'styled-components';
import {ConstHeader} from '../../../utils/constants.tsx';
import {Info} from '../../../utils/constants.tsx';
import { Box } from '@mui/material';

const StyledBox = styled(Box)`
  background-color:rgba(102,61,165,255);
  color: white;
  padding:10px;
`;

export default function Index() {
  const [state, setState] = useState<boolean>(false);
  const [rowStates, setRowStates] = useState<boolean[]>(Array(Info.length));

  const handleCheckboxChange = (index:number, isChecked:boolean) => {

    if (index === 0) 
      {
      setState(isChecked);
      setRowStates(Array(Info.length).fill(isChecked));
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
    <Box>
    {ConstHeader}
      <table>
        {Info.map((ar, i) => (
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
    </Box>
  );
}

