
import { Box, Stack, styled } from '@mui/material';
import React from 'react';
import Text from '../../atoms/Text/index.tsx';
import Icon from '../../atoms/Icon/index.tsx';
import TextIcon from '../TextIcon/index.tsx';
import { theme } from '../../../themes/index.tsx';
import Button from '../../atoms/Button/index.tsx';

interface InputProps {
  src: string;
  FontSize: number;
  ButtonText: string;
  FontWeight?: number;
  BookTitle: string;
  AuthorTitle: string;
  TimeText: string;
  ReadTexts?: string;
  index: number;
  currentState: boolean;
  handleButtonClick: (i: number, state: boolean) => void;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e1ecfc;
  border-radius: 8px;
  width: 284px;
  height: fit-content;
`;

export default function Card({
  src,
  FontSize,
  ButtonText,
  FontWeight = theme.typography.fontWeightBold as number,
  BookTitle,
  AuthorTitle,
  TimeText,
  ReadTexts,
  index,
  currentState,
  handleButtonClick,
}: InputProps) {
  
  function lengthChecker() {
    return ReadTexts && ReadTexts.length !== 0;
  }

  function handleClick() {
    handleButtonClick(index, !currentState);
  }

  return (
    <StyledBox>
      <Icon width={theme.spacing(142) as unknown as number} height={theme.spacing(141) as unknown as number} src={src} />
      <Text FontSize={FontSize} FontWeight={FontWeight}>
        {BookTitle}
      </Text>
      <Text FontSize={FontSize} FontWeight={theme.typography.h2.fontWeight as number}>
        {AuthorTitle}
      </Text>
      <Stack direction="row" spacing={36}>
        <TextIcon text={TimeText} src={`${process.env.PUBLIC_URL}/assets/TimeIcon.svg`} />
        {lengthChecker() && <TextIcon text={ReadTexts || ''} src={`${process.env.PUBLIC_URL}/assets/ReadersCount.svg`} />}
      </Stack>
      <Button variation="text" text={ButtonText} handleButtonClick={handleClick}></Button>
      <Icon src={`${process.env.PUBLIC_URL}/assets/Rectangle.svg`}></Icon>
    </StyledBox>
  );
}










// import { Box, Stack, styled } from '@mui/material';
// import React from 'react';
// import Text from '../../atoms/Text/index.tsx';
// import Icon from '../../atoms/Icon/index.tsx';
// import TextIcon from '../TextIcon/index.tsx';
// import { theme } from '../../../themes/index.tsx';
// import Button from '../../atoms/Button/index.tsx';
// interface InputProps {
//   src: string;
//   FontSize: number;
//   ButtonText:string;
//   FontWeight?: number;
//   BookTitle: string;
//   AuthorTitle: string;
//   TimeText: string;
//   ReadTexts?: string;
//   index: number;
//   currentState:boolean;
//   handleButtonClick: (i:number,state:boolean) => void;
// }

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   border: 1px solid #e1ecfc;
//   border-radius: 8px;
//   width:284px;
//   height:fit-content;
// `;

// export default function index({
//   src,
//   FontSize,
//   ButtonText,
//   FontWeight = theme.typography.fontWeightBold as number,
//   BookTitle,
//   AuthorTitle,
//   TimeText,
//   ReadTexts,
//   index,
//   currentState,
//   handleButtonClick,
// }: InputProps) {


//   function lengthChecker()
//   {
//     if(ReadTexts)
//     {
//       if(ReadTexts.length!=0)
//       {
//         return true;
//       }
//     }
//     return false;
//   }

//   function handleButtonClicky()
//   {
//      handleButtonClick(index,!currentState);
//   }
//   return (
//     <StyledBox>
//       <Icon width={theme.spacing(142) as unknown as number} height={theme.spacing(141) as unknown as number} src={src} />
//       <Text FontSize={FontSize} FontWeight={FontWeight}>{BookTitle}</Text>
//       <Text FontSize={FontSize} FontWeight={theme.typography.h2.fontWeight as number}>{AuthorTitle}</Text>
//       <Stack direction={"row"} spacing={36}>
//         <TextIcon text={TimeText} src={`${process.env.PUBLIC_URL}/assets/TimeIcon.svg`} />
//      {
//       (lengthChecker()==true)?( <TextIcon text={ReadTexts || ""} src={`${process.env.PUBLIC_URL}/assets/ReadersCount.svg`} />):""
//      }  
//       </Stack>
//       <Button variation="text" text={ButtonText} handleButtonClick={handleButtonClicky}></Button>
//       <Icon src={`${process.env.PUBLIC_URL}/assets/Rectangle.svg`}></Icon>
//     </StyledBox>
//   );
// }
