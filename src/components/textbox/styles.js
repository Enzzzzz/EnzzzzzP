import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.gray900};
  padding: 1rem;
  width: 800px;
  height: 300px;
  float: right;
  margin-right: 8rem;
  border-radius: 20px 20px 20px 20px;
  box-shadow: inset 0 0 0 2px rgba(143, 255, 171, 0.5);
  border: 10px solid ${(props) => props.theme.colors.gray900};
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
    width: calc(100% - 3rem);
    overflow-x: hidden;
    margin-right: 0; 
    margin-left: 0;
    float: none;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.heading};
  text-shadow: 10px;
  text-align: left;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 10px;
    
  }
`;
export const Line1 = styled.div`
  position: absolute;
  top: 80px; 
  left: 30px; 
  width: 160px; 
  height: 2px; 
  background: ${(props) => props.theme.colors.enzz}; 
  border-radius: 50px; 
  transform-origin: 0 0; 


  @media (max-width: 768px) {
    height: 2px;
    width: 70px; 
    margin-right: 0; 
    margin-left: 0;
    top:50px
  }

`;

export const Line2 = styled.div`
  position: absolute;
  top: 40px; 
  left: 236px; 
  width: 300px; 
  height: 2px; 
  background: ${(props) => props.theme.colors.enzz}; 
  border-radius: 50px; 
  transform-origin: 0 0; 


  @media (max-width: 768px) {
    height: 2px;
    width: 50px; 
    margin-right: 0; 
    margin-left: 0;
    top: 32px; 
  left: 122px; 
  }

`;

export const Line3 = styled.div`
  position: absolute;
  top: 40px; 
  left: 350px; 
  width: 200px; 
  height: 2px; 
  background: ${(props) => props.theme.colors.enzz}; 
  border-radius: 50px; 
  transform-origin: 0 0; 

  @media (max-width: 768px) {
    height: 2px;
    width: 50px; 
    margin-right: 0; 
    margin-left: 0;
    top: 32px;
    left: 170px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      ${(props) => props.theme.colors.enzz},
      ${(props) => props.theme.colors.enzz} 10px,
      transparent 10px, 
      transparent 20px, 
      transparent 30px, 
      transparent 40px
    );
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 38px; 
  left: 640px; 
  width: 6px; 
  height: 6px; 
  background: ${(props) => props.theme.colors.enzz}; 
  border-radius: 50px;

  @media (max-width: 768px) {
    height: 6px;
    width: 6px; 
    margin-right: 0; 
    margin-left: 0;
    top: 30px;
    left: 260px;
  }
`;

export const CurvedLine = styled.div`
  position: absolute;
  top: 80px; 
  left: 189px; 
  width: 62px; 
  height: 2px; 
  background: ${(props) => props.theme.colors.enzz}; 
  border-radius: 50px; 
  transform-origin: 0 0; 
  transform: rotate(-40deg); 

  @media (max-width: 768px) {
    height: 2px;
    width: 30px; 
    margin-right: 0; 
    margin-left: 0;
    top: 50.4px;
    left: 99px;
  }
`;