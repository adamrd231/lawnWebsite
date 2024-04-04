import './App.css';
import Menu from './Views/Menu';
import Landing from './Views/Landing';
import styled from '@emotion/styled'
import Footer from './Views/Footer';
import Gallery from './Views/Gallery';
import GetFreeEstimate from './Views/GetFreeEstimate';
import CalendarQuote from './Views/CalendarQuote';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  gap: 0;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Landing />
      <Gallery />
      <GetFreeEstimate />
      <Footer />
    </Container>
  );
}

export default App;
