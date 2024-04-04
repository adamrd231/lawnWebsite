import styled from '@emotion/styled'

const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  background: #efefef;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  drop-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  // created sticky menu header
  position: fixed;
  z-index: 3;
`;


const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

`;

const Title = styled.div`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;

const MenuItem = styled.div`

`;

function Menu() {
  return (
    <Container>
      <Title>Northern Lawn Mowing</Title>
      <RightSideContainer>
        <MenuItem>Special Deal, Free lawn service with first estimate or with leaf removal</MenuItem>
      </RightSideContainer>
    </Container>
  );
}

export default Menu;