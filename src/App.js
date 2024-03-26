import './App.css';
import Menu from './Views/Menu';
import Landing from './Views/Landing';
import styled from '@emotion/styled'
import Footer from './Views/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Landing />
      <Footer />
    </Container>
  );
}

export default App;
