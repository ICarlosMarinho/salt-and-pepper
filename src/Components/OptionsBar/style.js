import styled from "styled-components";
import Button from "../Button";

const OptionsBarContainer = styled.div`
  background: linear-gradient(90deg, #ccffff, #ffcccc);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  width: 100%;
  border-radius: 50px;

  @media (max-width: 500px) {
    flex-direction: column;
    row-gap: 10px;
    padding: 10px;
    border-radius: 5px;
  }
`;

const ExtendedButton = styled(Button)`
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;

const InputContainer = styled.div`
  width: 30%;

  @media (max-width: 800px) {
    & {
      width: 50%;
    }
  }

  @media (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export { OptionsBarContainer, ExtendedButton, InputContainer };
