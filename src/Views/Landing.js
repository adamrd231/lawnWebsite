import styled from '@emotion/styled'
import { useState } from 'react';
import Gallery from './Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  min-height: 60vh;
  background-image: url('/lawn.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
`;

const Button = styled.a`
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid #333;
  min-width: 7rem;
  text-align: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;


const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

function Landing() {

  return (
    <Container>
      <o>Let a local Northern Michigan Business help</o>
      <Title>Provide Your Lawn Care.</Title>
      <RowContainer>
      <Button href="mailto:reedboards@gmail.com">Request a quote</Button> 
      <Button href="mailto:reedboards@gmail.com">Details</Button> 
      </RowContainer>

   
    </Container>
  );
}

export default Landing;