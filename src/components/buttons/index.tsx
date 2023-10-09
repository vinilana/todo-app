import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  margin: 0.5em;
  background-color: blue;
  color: white;

  &:disabled {
    opacity: 0.5;
  }
`;

export const MoveBackButton = styled(StyledButton)`
  background-color: red;
`;

export const MoveForwardButton = styled(StyledButton)`
  background-color: green;
`;

export default StyledButton;
