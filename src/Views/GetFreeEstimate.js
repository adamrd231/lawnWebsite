import styled from "@emotion/styled";
import Button from "../Components/Buttons";
import MailtoButton from "../Components/MailtoButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  gap: 1rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

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
        <MailtoButton type="submit">Let's Mow!</MailtoButton>
      </ColumnContainer>
     
    </Container>
  )
}

export default GetFreeEstimate;