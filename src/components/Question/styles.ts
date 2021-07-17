import styled from "styled-components";

const StyledQuestion = styled.div`
  background: var(--gray-10);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 32px;
  }

  &.highlighted {
    background: var(--purple-10);
    border: 1px solid var(--purple-800);

    footer .user-info span {
      color: var(--gray-800);
    }
  }

  &.answered {
    background: var(--gray-150);
  }

  p {
    color: var(--gray-800);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: var(--gray-500);
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: var(--gray-500);
        gap: 8px;

        &.liked {
          color: var(--purple-800);

          svg path {
            stroke: var(--purple-800);
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export { StyledQuestion }