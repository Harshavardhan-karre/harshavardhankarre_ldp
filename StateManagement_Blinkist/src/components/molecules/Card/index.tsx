import { Box, Stack, styled } from "@mui/material";
import React from "react";
import Text from "../../atoms/Text/index.tsx";
import Icon from "../../atoms/Icon/index.tsx";
import TextIcon from "../TextIcon/index.tsx";
import { theme } from "../../../themes/index.tsx";
import Button from "../../atoms/Button/index.tsx";
import TimeIcon from '../../../../public/assets/TimeIcon.svg'
import ReadersCount from '${process.env.PUBLIC_URL}/assets/ReadersCount.svg';
import RectangleIcon from '${process.env.PUBLIC_URL}/assets/Rectangle.svg';
interface InputProps {
  Src: string;
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
  gap: ${theme.spacing(5)};
  border: 1px solid ${theme.palette.primary.light};
  border-radius:  ${theme.spacing(4)};
  width:  ${theme.spacing(142)};
  height: fit-content;
`;

export default function Card({
  Src,
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
      <Icon
        width={theme.spacing(142) as unknown as number}
        height={theme.spacing(141) as unknown as number}
        src={Src}
      />
      <Text fontSize={FontSize} fontWeight={FontWeight}>
        {BookTitle}
      </Text>
      <Text
        fontSize={FontSize}
        fontWeight={theme.typography.h2.fontWeight as number}
      >
        {AuthorTitle}
      </Text>
      <Stack direction="row" spacing={36}>
        <TextIcon
          text={TimeText}
          src={TimeIcon}
        />
        {lengthChecker() && (
          <TextIcon
            text={ReadTexts || ""}
            src={ReadersCount}
          />
        )}
      </Stack>
      <Button
        variation="text"
        text={ButtonText}
        handleButtonClick={handleClick}
      ></Button>
      <Icon src={RectangleIcon}></Icon>
    </StyledBox>
  );
}
