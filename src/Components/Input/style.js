import styled from "styled-components";

const StyledInput = styled.input`
  width: 70%;
  height: ${(props) => props.height || "40px"};
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;

  &[type="range"] {
    padding: 0;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: ${(props) => props.width || "100%"};
`;
export { StyledInput, StyledLabel };
