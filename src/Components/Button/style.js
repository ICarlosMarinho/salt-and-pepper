import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "40px"};
  color: #fff;
  background-color: ${(props) => (props.alert ? "#fc5858" : "#000")};
  font-weight: bold;
  border-radius: 50px;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: none;
  }
`;

const StyledButton = styled.button`
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "40px"};
  color: #fff;
  background-color: ${(props) => (props.alert ? "#fc5858" : "#000")};
  font-weight: bold;
  border-radius: 50px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: none;
  }
`;

export { StyledButton, StyledLink };
