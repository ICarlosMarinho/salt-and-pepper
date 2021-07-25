import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  min-width: 22%;
  background-color: #fff;
`;

const Image = styled.img`
  width: auto;
  height: 100px;
  border-radius: 5px;
`;

const Title = styled.strong`
  color: #6a6a6a;
`;

const ExpiryDate = styled.span`
  color: ${(props) => (props.expired ? "#fc5858" : "#000")};
`;
const Price = styled.span`
  font-style: italic;
`;

export { CardContainer, Image, Price, Title, ExpiryDate };
