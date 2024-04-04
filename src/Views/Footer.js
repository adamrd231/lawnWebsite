import React from 'react';

import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  position: relative;
  color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  justify-content: center;
  padding-top: 3rem;
`;


const FooterImage = styled.img`
  width: 100%;
  height: 100%;
  object-repeat: no-repeat;
  object-fit: cover;
  position: absolute;
  z-index: -2;
  filter: blur(3px);

`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function Footer() {
  return (
    <Container>
      <TextContainer>
        <h2>About MI Lawn Care</h2>
        <p>My first job as a kid was mowing lawns, and I have always found joy in managing and maintaining order in the yard. After moving home to Michigan after time in the tech industry, I was looking for somehwere new to implement my skills in an industry I know and care about. I am looking to grow my client base this summer and look forward to helping create beautiful yards for family and fun.</p>
        <p>Adam Reed - Apr 2024</p>
        <h2>Contact</h2>
        <p>231.445.1463</p>
        <p>adam@rdconcepts.design</p>
        <p>Currently accepting new clients!</p>
        <p>licensed and insured</p>
      </TextContainer>

      <FooterImage src="grass.jpeg" alt="grass" />
      <Overlay />
    </Container>
    
  )
}

export default Footer;