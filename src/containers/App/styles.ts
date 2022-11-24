import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const App: any = styled(Container)`
  height: 100vh;
  flex-direction: column;

  .logo-mini {
    text-decoration: none;
  }
`;

App.Content = styled.div`
  padding: 30px 15px;
  min-height: calc(100% - 123px);
`;

export default App;
