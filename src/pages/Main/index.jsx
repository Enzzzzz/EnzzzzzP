import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/Card/card";
import { 
  Logo, 
  Container,
  Enzz,
  Divisao,
  Reverse,
 } from './styles'


export default function Main() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Navbar />
    <div className="conteudo-superior">
      <Container>
        <Logo src="/logo.png" alt="Logo" />
        <Enzz>Enzo Henrique</Enzz>
      </Container>
    </div>
    <div className={`conteudo-inferior ${showContent ? "mostrar" : ""}`}>
      <Reverse/>
      <Divisao />
      <Card/>
    </div>
  </div>
  );
}
