import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    
    --gray-10: #fefefe;
    --gray-20: #f8f8f8;
    --gray-50: #f7f8fa;
    --gray-100: #e2e2e2;
    --gray-150: #dbdcdd;
    --gray-200: #a8a8b3;
    --gray-500: #737380;
    --gray-800: #29292e;

    --purple-10: #f4f0ff;
    --purple-800: #835afd;

    --pink-500: #e559f9;

    --orange: #ea4335;
  }

  body {
    background: ${props => props.theme.colors.gray20};
    color: ${props => props.theme.colors.gray800};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }
`;