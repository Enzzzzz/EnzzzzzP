import styled, { keyframes} from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  overflow-x: hidden;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const pulse = keyframes`
0%{
  color: white
}
  50% {
    color: #8fffab;
  }
  100% {
    color: white;
  }
`

export const Logo = styled.img`
  justify-items: center;
  margin-top: 8rem;
  height: 300px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
  animation: ${bounce} 1s infinite;
  transform-origin: bottom;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`

export const Enzz = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fontFamily.heading};
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Line = styled.div`
color: ${(props) => props.theme.colors.enzz};
background-color: ${(props) => props.theme.colors.enzz};
width: 600px; 
height: 100px;  
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 50%/150px 100px 50px 0px;
display: inline-block;
margin-right: -5rem;
box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
`;

export const Line1 = styled.div`
color: ${(props) => props.theme.colors.enzz};
background-color: ${(props) => props.theme.colors.enzz};
width: 400px; 
height: 100px;  
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 60%/100px 100px 0px 40px;
display: inline-block;
box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
`;

export const Line2 = styled.div`
color: ${(props) => props.theme.colors.enzz};
background-color: ${(props) => props.theme.colors.enzz};
width: 800px; 
height: 100px;  
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 80%/120px 100px 40px 40px;
display: inline-block;
margin-right: -5rem;
box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
`;

export const Line3 = styled.div`
color: ${(props) => props.theme.colors.enzz};
background-color: ${(props) => props.theme.colors.enzz};
width: 200px; 
height: 100px;  
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 60%/90px 100px 80px 80px;
display: inline-block;
margin-right: -5rem;
box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
`;

export const Line4 = styled.div`
color: ${(props) => props.theme.colors.enzz};
background-color: ${(props) => props.theme.colors.enzz};
width: 700px; 
height: 100px;  
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 60%/200px 150px 100px 50px;
display: inline-block;
box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

    @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const LineContainer2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: -10rem;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const Divisao = styled.hr`
background-color: #8fffab;
margin-top: 6rem;
height: 200px;
border: solid 5px #8fffab;
border-color: #8fffab transparent transparent transparent;
border-radius: 50%/100px 100px 0 0;
min-height: 100px;
max-width: 2800px;
box-shadow: 0 -10px 10px rgba(143, 255, 171, 0.5);
z-index: 2;

@media (max-width: 768px) {
    height: 200px;
    width: 100%;
  }
`;

export const Reverse = styled.hr`
background-color: ${(props) => props.theme.colors.gray900};
margin-top: 6rem;
height: 200px;
width: calc(100% - 1rem);
border: solid 5px ${(props) => props.theme.colors.gray900};
border-color: ${(props) => props.theme.colors.gray900} transparent transparent transparent;
border-radius: 50%/0 0 100px 100px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
min-height: 100px;
position: absolute;
  top: 850px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    height: 200px;
    width: 100%;
    margin-top: -7rem;
  }
`;
