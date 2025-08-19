import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    padding: 25px;
    width: 100%;
    max-width: 380px;
    text-align: center;
    transition: 0.3s;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    margin: 15px;
    border-top: 5px solid #2ecc71;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
        max-width: 100%;
        margin: 15px 0;
    }
`;

const Titulo = styled.h2`
    margin: 15px 0;
    color: #1a5632;
    font-size: 1.5rem;
`;

const Texto = styled.p`
    font-size: 15px;
    color: #34495e;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 14px;
    transition: border 0.3s;

    &:focus {
        outline: none;
        border-color: #2ecc71;
        box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
    }
`;

const Button = styled.button`
    padding: 12px;
    background: linear-gradient(to right, #27ae60, #2ecc71);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s;
    margin-top: 5px;

    &:hover {
        background: linear-gradient(to right, #219653, #27ae60);
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(39, 174, 96, 0.3);
    }
`;

const Img = styled.img`
    width: 100%;
    border-radius: 8px;
    height: 180px;
    object-fit: cover;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    
    svg {
        width: 50px;
        height: 50px;
        fill: #27ae60;
    }
`;

// Ícone de folha (SVG) para representar a natureza
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.8 3 19c2.5-3.5 6.5-5.1 12-2c2-1.5 4-4.5 5-6c-3.5 0-6.5 1.5-9 3c-3-2.5-5.5-5-6-8c2.5 2.5 5 5.5 12 5c-4.5 3.5-10 4-12 6c4.5 0 8.5-2 11-5c1.5 3 2.5 6.5 3 10c0.5-4.5-1.5-9.5-5-12"/>
  </svg>
);

export default function Card() {
  return (
    <CardContainer>
      <IconContainer>
        <LeafIcon />
      </IconContainer>
      <Img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Imagem de natureza preservada"/>
      <Titulo>Junte-se à Nossa Causa Ambiental</Titulo>
      <Texto>Participe de nossas iniciativas para preservar o meio ambiente e criar um futuro sustentável para as próximas gerações.</Texto>

      <Form onSubmit={(e) => { e.preventDefault(); alert('Obrigado por se inscrever em nossa causa! Entraremos em contato em breve.'); }}>
        <Input type="text" placeholder="Seu nome completo" required />
        <Input type="email" placeholder="Seu melhor e-mail" required />
        <Button type="submit">Tornar-me Voluntário</Button>
      </Form>
    </CardContainer>
  );
}