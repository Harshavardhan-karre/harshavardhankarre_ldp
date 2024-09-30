import React, { useState } from "react";
import "../../../App.css";
import Row from "../../molecules/RowTab/index.tsx";
import { ConstHeader } from "../../../utils/constants.tsx";
import { Info } from "../../../utils/constants.tsx";
import { Box } from "@mui/material";

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
    <Box>
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
    </Box>
  );
}
