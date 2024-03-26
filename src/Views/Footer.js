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

const Label = styled.label`

`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 3rem;
`;

const FooterTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;

`;

function Footer() {
  const [currentEmail, setCurrentEmail] = useState();

  const updateValue = (evt) => {
    const val = evt.target.value;
    setCurrentEmail(val);
    console.log(val)
  }

  return (
    <Container>
      <RowContainer>
      <FooterTitle>Tim & Sons</FooterTitle>
      </RowContainer>
      <RowContainer>
      <p>Cheboygan, Northern Michigan</p>
      <p>Licensed & Insured</p>
      </RowContainer>
      <ColumnContainer>

        <Label htmlFor="email">Request a quote</Label>
        <Input value={currentEmail} onChange={evt => updateValue(evt)} type="text" id="name" name="name" placeholder="enter email" />

      </ColumnContainer>
    </Container>
    
  )
}

export default Footer;