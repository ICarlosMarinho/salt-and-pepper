import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
`;

const NavBar = styled.nav`
  display: flex;
  column-gap: 20px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;

export { HeaderContainer, NavBar, StyledLink };
