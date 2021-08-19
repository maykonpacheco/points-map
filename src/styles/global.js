import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: #CCC;
    -webkit-font-smoothing: antialized;
    font-family: 'Roboto', sans-serif;
  }

  button {
      cursor: pointer;
      background: none;
      border: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 476px;
    background: #FFFFFF;
    position: relative;
    border-radius: 0.30rem;
  }
`;
