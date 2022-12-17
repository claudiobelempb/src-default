import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*----------*----------*----------*----------*---------- Reset */
  
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html {
      ${theme.font.fontFamilyDefault('Roboto')};
      font-weight: 600;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
      font-size: 62.5%;
      ${theme.variant.backgroundDefault({
        background: { index: 'gray', value: 'v900' }
      })};
      ${theme.variant.colorDefault({
        color: { index: 'gray', value: 'v400' }
      })};
    }
    body {
      font-size: 1.6rem;
      font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${theme.font.fontFamilyDefault('Roboto')};
      ${theme.variant.colorDefault({
        color: { index: 'gray', value: 'v400' }
      })};
      font-weight: 900;
      line-height: 160%;
    }
    img,
    figure {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      ${theme.font.fontFamilyDefault('Roboto')};
      text-decoration: none;
      color: inherit;
      align-self: flex-start;
      cursor: pointer;
      border: 2px solid transparent;
      /* background-color: inherit; */
      /* width: max-content; */
      /* text-align: center; */
      a:hover {
        filter: brightness(0.9);
        cursor: pointer;
      }
    }
    p {
      line-height: 160%;
      ${theme.font.fontFamilyDefault('Roboto')};
    }

    :focus {
      outline: transparent;
      /* box-shadow: 0 0 0 2px red; */
      border-radius: 0.5rem;
      ${theme.border.borderDefault({
        width: 2,
        color: { index: 'gray', value: 'v500' }
      })};
    }

    main {
      display: flex;
      flex: 1 1;
      flex-direction: column;
    }

    ol,
    ul {
      list-style-position: inside;
      list-style-type: none;
    }

    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      min-width: 60rem;
    }
    span {
      display: block;
    }
    pre {
      ${theme.variant.colorDefault({
        color: { index: 'gray', value: 'v400' }
      })};
    }
  `}
`;
