import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CardData } from "../../../utils/constants.tsx";
import Card from "../../molecules/Card/index.tsx";
import { theme } from "../../../themes/index.tsx";
import styled from "styled-components";
import Header from "../../molecules/Header/index.tsx";
const StyledBox = styled(Box)`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(40) as unknown as number};
`;

const StyledOuterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: ${theme.spacing(20) as unknown as number};
`;

export default function Index() {
  const [current, setCurrent] = useState<boolean>(() => {
    const storedTabState = localStorage.getItem("currentTab");
    return storedTabState ? JSON.parse(storedTabState) : true;
  });

  const [cardState, setCardState] = useState<boolean[]>(() => {
    const storedCardState = localStorage.getItem("cardState");
    return storedCardState
      ? JSON.parse(storedCardState)
      : Array(CardData.length).fill(false);
  });

  useEffect(() => {
    localStorage.setItem("currentTab", JSON.stringify(current));
  }, [current]);

  useEffect(() => {
    localStorage.setItem("cardState", JSON.stringify(cardState));
  }, [cardState]);

  function handleTab(value: boolean) {
    setCurrent(value);
  }

  function handleButton(index: number, currentState: boolean) {
    setCardState((prevState) => {
      const newState = [...prevState];
      newState[index] = !currentState;
      return newState;
    });
  }

  function Invoker(condition: boolean, buttonText: string) {
    return CardData.map(
      (array, index) =>
        cardState[index] === condition && (
          <Card
            key={index}
            src={array.src}
            FontSize={theme.typography.h2.fontSize as number}
            ButtonText={buttonText}
            FontWeight={theme.typography.h1.fontWeight as number}
            BookTitle={array.text}
            AuthorTitle={array.authText}
            TimeText={array.timeLeft}
            ReadTexts={array.ReadTexts}
            index={index}
            currentState={cardState[index]}
            handleButtonClick={() => handleButton(index, cardState[index])}
          />
        )
    );
  }

  return (
    <StyledOuterBox>
      <Header
tab1={"Currently Reading"}
isTab1={current}
tab2={"Finished"}
handleTab={(val) => handleTab(val)}
/>
      <StyledBox>
        {current ? Invoker(false, "Finished") : Invoker(true, "Read Again")}
      </StyledBox>
    </StyledOuterBox>
  );
}
