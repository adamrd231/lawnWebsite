import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin: auto;
  min-height: 100vh;
`;

function Landing() {
  return (
    <Container>
      <h1>Services</h1>
      <p>Lawn mowing</p>
      <p>Weedwacking</p>
      <p>Bagging / Removal</p>
      <p>Aeration</p>
    </Container>
  );
}

export default Landing;