import styled from '@emotion/styled'
import { useState } from 'react';
import Gallery from './Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 60vh;
  position: relative;
  color: white;
`;

const Button = styled.a`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid #333;
  min-width: 7rem;
  text-align: center;
  background: green;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
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

// Create a styled image that takes the lawn.jped asset from the public folder
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-blend-mode: darken;
  object-fit: cover;
  position: absolute;
  z-index: -2;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70%;
  margin: auto;
  text-align: right;
`;

function Landing() {

  return (
    <Container>
      <TextContainer>
        <Title>Northern Michigan Lawncare, Reliable, Local, Insured.</Title>
        <>Local and dedicated lawn care services provided by Adam Reed and family. Our small team is ready to help bring your lawn to life, offering services from landscpaing, mowing, clean-up and aeration, we are a full-service lawncare company.</>
        <RowContainer>
          <Button href="mailto:reedboards@gmail.com">Request a quote</Button> 
          <Button href="mailto:reedboards@gmail.com">Details</Button> 
        </RowContainer>
      </TextContainer>
      <BackgroundImage src='lawn.jpeg'/>
      <Overlay />
    </Container>
  );
}

export default Landing;