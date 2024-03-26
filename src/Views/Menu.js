import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;


const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const MenuItem = styled.div`
  margin: 1rem;
`;

function Menu() {
  return (
    <Container>
      <h1>ALM</h1>
      <RightSideContainer>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </RightSideContainer>
    </Container>
  );
}

export default Menu;