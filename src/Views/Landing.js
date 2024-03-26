import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function Landing() {
  return (
    <Container>
      <h1>Adam's Lawn Mowing</h1>
    </Container>
  );
}

export default Landing;