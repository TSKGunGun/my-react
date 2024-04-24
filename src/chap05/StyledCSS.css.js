import css from 'styled-jsx/css'

export const globalCss = css.global`
  h3 {
    background-color: yellow;
  }
`;

export const resolveCss = css.resolve`
  .panel {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  }
`