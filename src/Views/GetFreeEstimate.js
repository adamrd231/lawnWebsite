import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: auto;
  margin-top: 5rem;
  gap: 5rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 30vh;
  // two rows, equal sizing
  width: 50%;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Label = styled.label`
  font-size: 0.66rem;
  padding: 0.25rem 0;

`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.25rem 0;
`;

function GetFreeEstimate( /* props */ ) {
  return ( 
    <Container>
      <ColumnContainer>
      <h3>
        Get a free estimate today
      </h3>
      <p>
        You can request an estimate via this form, our google calendar, cell or email. If you would like a quote, please let us know what kind of services you are looking for, and a rough size and we will follow up witha quote.
      </p>
      </ColumnContainer>
      
      <ColumnContainer>
        <Form>
          <Label for="name">Name:</Label>
          <Input placeholder="name" type="text" id="name" name="name" required></Input>
          <Label for="services">Services:</Label>
          <Input type="text" id="services" name="services" required></Input>
          <Label for="phone">Phone:</Label>
          <Input type="tel" id="phone" name="phone" required></Input>
          <Label for="email">Email:</Label>
          <Input type="email" id="email" name="email" required></Input>
          <Label for="message">Message:</Label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </Form>
      </ColumnContainer>
     
    </Container>
  )
}

export default GetFreeEstimate;