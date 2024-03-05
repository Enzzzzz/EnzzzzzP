import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.sans};
    padding: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }

  .sub {
    background-image:
      linear-gradient(
        transparent 0%,
        transparent 90%,
        #8fffab 90%,
        #8fffab 100%
      );
    
  .card {
    display: flex;
    align-items: center;
    width: 72vw;
    max-width: 650px;
    padding: 
      50px 30px 50px 20px;
    background: #121017;
    border-radius: 24px;
  }

  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;

  transition: background-size 300ms;
  }

  .sub:hover {
    background-size: 100% 100%;
    background-position-x: left;
  }

  .conteudo-superior {
  background-color: ${(props) => props.theme.colors.gray900}; 
}

.conteudo-inferior {
  margin-top: 30rem;
  background-image:
      linear-gradient(
        transparent 0%,
        transparent 20%,
        #8fffab 20%,
        #8fffab 60%,
        transparent 80%,
        transparent 100%
      );
  height: 1000px;
  opacity: 0;
  display: block;
  transition: opacity 1s;
  width: 100%;
  overflow-x: hidden;
}

.conteudo-inferior.mostrar {
  opacity: 1; 
}
`;
