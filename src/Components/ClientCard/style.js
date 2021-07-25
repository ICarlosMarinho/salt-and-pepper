import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  min-width: 22%;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

const InfoSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;
export { CardContainer, InfoSection };
