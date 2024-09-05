import React from 'react';
import Text from '../../atoms/Text/index.tsx';
import CheckBox from '../../atoms/CheckBox/index.tsx';
import styled from 'styled-components';


const StyledText = styled(Text)`
  padding: 10px;
`;

const StyledTh = styled.th`
  padding: 10px;
`;

const StyledTd = styled.td`
  padding: 10px;
`;

const Styledhighlight = styled.tr`
  background-color: #663da5;
`;

export default function Index(props) {
  const { data, i, state, isChecked, onCheckboxChange} = props;

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    onCheckboxChange(i, newCheckedState);
  };

  const Rowy = () => {
    return data.map((j, index) => (
      i === 0 ? (
        <StyledTh key={index}>
          <StyledText text={j} />
        </StyledTh>
      ) : (
        <StyledTd key={index}>
          <StyledText text={j} />
        </StyledTd>
      )
    ));
  };

  const RowComponent = isChecked || (i === 0 && state) ? Styledhighlight : 'tr';

  return (
    <RowComponent>
      <CheckBox
        checked={isChecked || (i === 0 && state)}
        onChange={handleCheckboxChange}
      />
      <Rowy />
    </RowComponent>
  );
}
