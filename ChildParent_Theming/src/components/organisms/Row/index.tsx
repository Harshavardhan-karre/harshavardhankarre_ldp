import React, { useState } from "react";
import "../../../App.css";
import Row from "../../molecules/RowTab/index.tsx";
import { ConstHeader } from "../../../utils/constants.tsx";
import { Info } from "../../../utils/constants.tsx";
import { Box } from "@mui/material";
import {theme} from '../../../themes/index.tsx';
import styled, { ThemeProvider } from "styled-components";

const StyledBox = styled(Box)`
  background-color: ${theme.palette.primary.main};
  color: white;
  border-radius: 25px;
  padding: 16px;
`;

export default function Index() {
  const [state, setState] = useState<boolean>(false);
  const [rowStates, setRowStates] = useState<boolean[]>(Array(Info.length));

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    if (index === 0) {
      setState(isChecked);
      setRowStates(Array(Info.length).fill(isChecked));
    } else {
      const updatedRowStates = [...rowStates];

      updatedRowStates[index] = isChecked;
      setRowStates(updatedRowStates);
      if (!isChecked) {
        setState(false);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
      {ConstHeader}
      <table>
        {Info.map((array, index) => (
          <Row
            key={index}
            array={array}
            index={index}
            state={state}
            isChecked={rowStates[index]}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </table>
      </StyledBox>
      </ThemeProvider>
  );
}
