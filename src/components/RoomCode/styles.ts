import styled from "styled-components";

const RoomCodeStyled = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: var(--white);
  border: 1px solid var(--purple-800);
  cursor: pointer;

  display: flex;

  div {
    height: 100%;
    background: var(--purple-800);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export { RoomCodeStyled };