import styled from '@emotion/styled'

const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;

`;


const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const MenuItem = styled.div`

`;

function Menu() {
  return (
    <Container>
      <h1>T&S</h1>
      <RightSideContainer>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </RightSideContainer>
    </Container>
  );
}

export default Menu;