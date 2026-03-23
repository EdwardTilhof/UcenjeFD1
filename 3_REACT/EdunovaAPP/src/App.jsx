import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom' // Add this line
import NavBar from './components/NavBar'
import { RouteNames } from './constants'

// Don't forget to import your page components!
import Home from './pages/Home' 
import SmjerPregled from './pages/smjerovi/smjerPregled'
import  {SmjerNovi}  from './pages/smjerovi/SmjerNovi'

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route path={RouteNames.SMJEROVI} element={<SmjerPregled />} />
        <Route path={RouteNames.SMJEROVI_NOVI} element={<SmjerNovi />} />
      </Routes>
      <hr />
      &copy; Edunova
    </Container>
  )
}

export default App