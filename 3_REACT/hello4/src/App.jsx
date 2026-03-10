import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

import './App.css';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/vite.svg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


function ListGroupExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function WithHeaderAndQuoteExample() {
  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col><BasicExample /></Col>
        <Col><ListGroupExample /></Col>
        <Col><WithHeaderAndQuoteExample /></Col>
      </Row>
    </Container>
  );
}
