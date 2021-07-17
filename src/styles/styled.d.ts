import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    titleTheme: string;

    colors: {
      white: string;
    
      gray10: string;
      gray20: string;
      gray50: string;
      gray100: string;
      gray150: string;
      gray200: string;
      gray500: string;
      gray800: string;

      purple10: string;
      purple800: string;

      pink500: string;

      orange: string;
    }
  }
}