import styled from '@emotion/styled'
import { useState } from 'react';
import Gallery from './Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin: auto;
  min-height: 100vh;
`;

const Button = styled.a`
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid #333;
`;


function Landing() {

  return (
    <Container>
      <h1>Hire local lawn pro for your Northern Michigan lawncare needs.</h1>
      <Button href="mailto:reedboards@gmail.com">Request a quote</Button> 

      <h2>How it works</h2>
      <h3>Request a quote</h3>
      <p>We come out and perform our first mowing service for free, allowing up to measure and get a fair and accurate quote for work.</p>

      <h3>Mow On Demand</h3>
      <p>Existing customers can schedule services for any weekday using our online calendar, sending us a text or email.</p>

      <h3>Payment after services</h3>
      <p>We accept cash, Venmo, Square, Zelle and checks.</p>

      <h2>About</h2>
      <p>Servicing Northern Michigan, Tim & Sons lawn mowing is efficient, professional and hardworking crew the keep your lawn looking great this summer. </p>

      <Gallery></Gallery>
   
    </Container>
  );
}

export default Landing;