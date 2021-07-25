import { StyledButton, StyledLink } from "./style";

export default function Button({ linkButton, children, ...rest }) {
  return !linkButton ? (
    <StyledButton {...rest}>{children}</StyledButton>
  ) : (
    <StyledLink {...rest}>{children}</StyledLink>
  );
}
