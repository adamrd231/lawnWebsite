import styled from "@emotion/styled";
import Button from "../Components/Buttons";

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
  font-weight: bold;
  text-transform: uppercase;
  color: #333333;

`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.25rem 0;
  border: none;
  // create bottom only border
  border-bottom: 1px solid #33333340;
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 0.25rem 0;
  border: none;
  border-bottom: 1px solid #33333340;
`;

function GetFreeEstimate( /* props */ ) {

  // create function to get formdata and send as an email 
  // on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const formData = new FormData(e.target);
    // create object to store form data
    const data = {};
    // loop through form data
    for (let [key, value] of formData.entries()) {
      // add form data to object
      data[key] = value;
    }
    // log the form data
    console.log(data);
  }


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
        <a href="mailto:adam@rdconcepts.design">
          <Button type="submit">Let's Mow!</Button>
        </a>

      </ColumnContainer>
     
    </Container>
  )
}

export default GetFreeEstimate;