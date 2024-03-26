import styled from '@emotion/styled'

const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  background: #efefef;
  padding: 1rem 2rem;
  box-sizing: border-box;
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