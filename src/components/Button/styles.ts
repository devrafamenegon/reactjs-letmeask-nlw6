import styled from "styled-components";

const StyledButton = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--purple-800);
  color: var(--white);
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: var(--white);
    border: 1px solid var(--purple-800);
    color: var(--purple-800);
    transition: all 0.2s;

    &:hover {
      background: var(--purple-800);
      color: var(--white);
    }
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { StyledButton };