import { StyledInput, StyledLabel } from "./style";

export default function Input({ labelText, id, width, ...rest }) {
  return (
    <StyledLabel htmlFor={id} width={width}>
      {labelText}
      <StyledInput id={id} {...rest} />
    </StyledLabel>
  );
}
