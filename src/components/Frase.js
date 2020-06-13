import React from 'react';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
  padding: 1rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width:800px;
  margin-top: 10rem;

  @media(min-width: 992px){
    margin-top:15rem;
  }

  h1{
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;
    position: realtive;
    padding-left: 4rem;

  }
  p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:1.4rem;
    font-weight:bold;
    text-align: right;
    color: #666;
    margin-top:2rem;
  }

`;

const Frase = ({phrase}) => {

    const {quote, author} = phrase;

    return(
      <PhraseContainer>
        <h1>{quote}</h1>
        <p>{author}</p>
      </PhraseContainer>
    );
}

export default Frase;
