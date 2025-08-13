import React from 'react';
import styled from 'styled-components';
import Card from './view/Card';
import { GlobalStyle } from './styles/styledComponents.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`
function App() {
  return (
  <>
  <GlobalStyle/>
  <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Página responsiva</h1>
  <Container>
    <Card/>

  </Container>
  </>
  );
}
export default App;