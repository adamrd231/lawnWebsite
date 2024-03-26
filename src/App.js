import './App.css';
import Menu from './Views/Menu';
import Landing from './Views/Landing';
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

`;

function App() {
  return (
    <Container>
      <Menu />
      <Landing />
    </Container>
  );
}

export default App;
