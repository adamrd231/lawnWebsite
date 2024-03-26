import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efefef;
  gap: 1rem;

`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

const FooterTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;

`; 

function Footer() {
  return (
    <Container>
      <RowContainer>
      <FooterTitle>Contact</FooterTitle>
      </RowContainer>
      <ColumnContainer>
        <p>231-445-1463</p>
        <p>Cheboygan, Northern Michigan</p>
        <p>Licensed & Insured</p>
      </ColumnContainer>
      <ColumnContainer>

   
      </ColumnContainer>
    </Container>
    
  )
}

export default Footer;