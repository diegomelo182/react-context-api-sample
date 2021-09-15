import { Container, Row, Col } from 'react-bootstrap';

import { ItemsProvider } from './contexts/itemsContext';
import ItemsList from './components/itemsList/itemsList';
import ItemsForm from './components/itemsForm/itemsForm';
import './App.scss';


function App() {
  return (
    <ItemsProvider>
      <Container>
        <Row>
          <h1>Context API Example</h1>
        </Row>
        <Row>
          <Col md={12}>
            <ItemsForm />
          </Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col>
            <h2>Items list:</h2>
            <ItemsList />
          </Col>
        </Row>
      </Container>
    </ItemsProvider>
  );
}

export default App;
