import React from "react";
import Text from "../../atoms/Text/index.tsx";
import CheckBox from "../../atoms/CheckBox/index.tsx";
import styled from "styled-components";
import {theme} from '../../../themes/index.tsx';
import { ThemeProvider } from "@mui/material";

const StyledText = styled(Text)`
  padding: 10px;
`;

const StyledTh = styled.th`
  padding: 10px;
  background-color:${theme.palette.hedcolor.main};
`;

const StyledTd = styled.td`
  padding: 10px;
`;

const Styledhighlight = styled.tr`
  background-color:${theme.palette.hedcolor.light};
`;
interface InputProps {
  array: string[];
  index: number;
  state: boolean;
  isChecked: boolean;
  onCheckboxChange: (index: number, isChecked: boolean) => void;
}

export default function Index(props: InputProps) {
  const { array, index, state, isChecked, onCheckboxChange } = props;

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    onCheckboxChange(index, newCheckedState);
  };

  const Rowy = () => {
    return array.map((j: string, rowindex: number) =>
      index === 0 ? (
        <ThemeProvider theme={theme}>
        <StyledTh key={rowindex}>
          <StyledText text={j} />
        </StyledTh>
        </ThemeProvider>
      ) : (
        <StyledTd key={rowindex}>
          <StyledText text={j} />
        </StyledTd>
      ),
    );
  };

  const RowComponent = isChecked || (index === 0 && state) ? Styledhighlight : "tr";

  return (
    <RowComponent>
      <CheckBox
        checked={isChecked || (index === 0 && state)}
        onChange={handleCheckboxChange}
      />
      <Rowy />
    </RowComponent>
  );
}
