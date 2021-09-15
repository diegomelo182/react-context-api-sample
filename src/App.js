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
          <Col md={6}>
            <ItemsForm />
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Items list:</p>
            <ItemsList />
          </Col>
        </Row>
      </Container>
    </ItemsProvider>
  );
}

export default App;
