import React, {useState, useEffect} from 'react';
import Frase from './components/Frase';
import styled from '@emotion/styled';

const Container = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  fontsize: 2rem;
  border: 2px solid black;
  transition:backgound-size .8s ease;

  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;



function App() {

  const [phrase, savePhrase] = useState({});

  const consultingAPI = async ()=>{
    const result = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await result.json();
    savePhrase(phrase[0]);
  }

  //cargar una frase automaticamente
  useEffect(()=>{
    consultingAPI();
  }, phrase)

  return (
    <Container>
      <Frase
        phrase={phrase}
      />

      <Button
        onClick={consultingAPI}
      >
        Get Phrase
      </Button>
    </Container>
  );
}

export default App;
