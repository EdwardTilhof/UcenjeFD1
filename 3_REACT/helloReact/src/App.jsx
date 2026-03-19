import 'bootstrap/dist/css/bootstrap.min.css'

import react from './assets/react.svg'
import './App.css'
import { Button, Card, Container, Table } from 'react-bootstrap'

function App() {
 

  return (

    <Container>

      <a href="moduli/index.html">Moduli</a>

      <hr />
    
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={react} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="dark">Moj gumb</Button>
      </Card.Body>
     </Card>


     <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    </Container>
    
  )
}

export default App
