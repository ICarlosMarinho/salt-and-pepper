import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 21%;
  height: auto;

  @media (max-width: 500px) {
    & {
      width: 60%;
    }
  }
`;

export { NotFoundContainer, StyledImg };
