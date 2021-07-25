import StyledList from "./style";

export default function ListContainer({
  listLength,
  emptyListMessage,
  children,
}) {
  return (
    <StyledList>
      {listLength ? children : <h2>{emptyListMessage}</h2>}
    </StyledList>
  );
}
