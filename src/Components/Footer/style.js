import styled from "styled-components";

const FooterContainer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 20px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const Icon = styled.img`
  width: 35px;
  height: auto;
`;

export { FooterContainer, Icon, StyledAnchor };
