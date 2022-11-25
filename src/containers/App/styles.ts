import 'regenerator-runtime/runtime'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const App: any = styled(Container)`
  height: 100vh;
  flex-direction: column;
`;

App.Content = styled.div`
  padding: 30px;
  flex-grow: 1;
  background-color: var(--bg-main);
`;

export default App;
