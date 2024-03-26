import styled from '@emotion/styled'
import { useState } from 'react';

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



      <h2>About</h2>
      <p>Servicing Northern Michigan, Tim & Sons lawn mowing is efficient, professional and hardworking crew the keep your lawn looking great this summer. </p>

      <h2>Lawn Services</h2>
      <p>Mowing</p>
      <p>Bagging / Removal</p>
      <p>Weedwacking</p>
      <p>Power edging</p>
      <p>Aeration</p>

      <h2>Garden Services</h2>
      <p>Hedge Trimming</p>
      <p>Mulch</p>
      <p>Weeding</p>
    </Container>
  );
}

export default Landing;