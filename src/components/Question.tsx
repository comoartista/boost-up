import { useState } from "react";
import Button from "./Button";
import Advice from "./Advice";
import styled from "styled-components";
const StyledText = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

export default function Question() {
  const [showAdviceButton, setShowAdviceButton] = useState(false); // Локальний стан для відображення Advice

  const handlerBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent === "Advice") {
      setShowAdviceButton(true);
    } else if (event.currentTarget.textContent === "Encourage") {
      console.log("Encourage");
    }
  };
  return (
    <section className="">
      {!showAdviceButton ? (
        <StyledText className="leading-10">
          Please choose what do you need in this moment
        </StyledText>
      ) : (
        <StyledText className="leading-10">Choose your situation</StyledText>
      )}

      <li className="flex justify-center gap-4 mt-2">
        <Button
          onClick={handlerBtn}
          text="Advice"
          showAdviceButton={showAdviceButton}>
          Advice
        </Button>
        <Button
          onClick={handlerBtn}
          text="Encourage"
          showAdviceButton={showAdviceButton}>
          Encourage
        </Button>
        {showAdviceButton && <Advice />}
      </li>
    </section>
  );
}
