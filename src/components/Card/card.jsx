import React from 'react'
import {
    ContainerL,
    CardH2,
    CardH3,
    CardImg,
    CardP,
    CardDiv
} from './styles'

function Card() {
  return (
        <ContainerL>
            <CardDiv>
                {/* foto temporária */}
                <CardImg src="/seungeun.jpg"/> 
                <div>
                    <CardH2>Quem sou eu?</CardH2>
                    <CardH3>Desenvolvedor Front-End</CardH3>
                    <CardP>Olá, meu nome é Enzo Henrique e eu sou um desenvolvedor Front-End. Atualmente focado em ReactJS, Javascript e Styled-Components. Pretendo iniciar os estudos em outros Frameworks como Angular 2 e VueJS.</CardP>
                </div>        
            </CardDiv>
        </ContainerL>
  )
}

export default Card