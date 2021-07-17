import styled from "styled-components";

const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: var(--purple-800);
    color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: var(--gray-20);
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: var(--white);
        border: 1px solid var(--gray-200);
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: var(--gray-500);
      margin-top: 16px;

      a {
        color: var(--pink-500);
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: var(--orange);
    color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: var(--gray-200);

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--gray-200);
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--gray-200);
      margin-left: 16px;
    }
  }
`;

export { PageAuth };