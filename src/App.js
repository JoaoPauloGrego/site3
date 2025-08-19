import React from 'react';
import styled from 'styled-components';
import Card from './view/Card';
import { GlobalStyle } from './styles/styledComponents.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e8f5e9, #f1f8e9);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    padding: 50px;
  }
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  color: #1a5632;
  font-size: 2.2rem;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: #4a6572;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 30px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #1a5632;
  color: white;
  margin-top: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header>
        <Title>GreenEarth - Proteção Ambiental</Title>
        <Subtitle>Juntos podemos fazer a diferença para o nosso planeta. Participe de nossas iniciativas de conservação e sustentabilidade.</Subtitle>
      </Header>
      <Container>
        <Card/>
      </Container>
      <Footer>
        <p>© {new Date().getFullYear()} GreenEarth ONG. Todos os direitos reservados.</p>
      </Footer>
    </>
  );
}

export default App;