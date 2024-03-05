import styled from "styled-components";

export const ContainerL = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  height: 100vh;
  background: #221d2d;
  color: #fdfcfd;
  font-family: "Poppins";
`;

export const CardDiv = styled.div`
    display: flex;
    align-items: center;
    width: 72vw;
    max-width: 650px;
    padding: 50px 30px 50px 20px;
    background: #121017;
    border-radius: 24px;

    @media (width <= 600px) {
        margin: 0 40px;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 60px;
        width: 100%;
        text-align: center;
        flex-direction: column;
    }
`

export const CardImg = styled.img`
    max-width: 280px;
    width: 35vw;
    height: 300px;
    object-fit: cover;
    margin-left: -60px;
    margin-right: 30px;
    border-radius: inherit;
    box-shadow: 
      0 60px 40px
      rgb(0 0 0 / 8%);

    @media (width <= 600px) {
        margin: -100px 0 30px 0;
        width: 100%;
        max-width: 1000px;
    }

    @media (width <= 400px) {
        height: 45vw;
        width: 45vw;
        border-radius: 50%;
        margin-top: -140px;
    }
    
`

export const CardH2 = styled.h2`
    font-size: 26px;
    font-weight: 400;
    margin-top: 0;
    margin-right: 30px;
    margin-bottom: 10px;

    @media (width <= 600px) {
        margin-right: 0;
    }
`

export const CardH3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    opacity: 0.75;
`

export const CardP = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
    opacity: 0.5;

    @media (width <= 600px) {
        max-width: 360px;
    }
`