import { HeaderContainer, NavBar, StyledLink } from "./style";

export default function Header() {
  const activeLinkStyle = {
    color: "#7a7a7a",
    transform: "scale(0.9)",
    transition: "none",
    pointerEvents: "none",
  };

  return (
    <HeaderContainer>
      <h1>Bem Vindo!</h1>
      <NavBar>
        <StyledLink activeStyle={activeLinkStyle} to="/products">
          Produtos
        </StyledLink>
        <StyledLink activeStyle={activeLinkStyle} to="/clients">
          Clientes
        </StyledLink>
      </NavBar>
    </HeaderContainer>
  );
}
