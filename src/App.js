import Home from "./Component/Home";
import Login from "./Component/Login";
import About from "./Component/About";
import Player from "./Component/Player";
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div>
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">NBA</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as= {Link} to= "/">Home</Nav.Link>
      <Nav.Link as= {Link} to="/Player">Players/Statistics</Nav.Link>
      <Nav.Link as= {Link} to="/Login">Login/Register</Nav.Link>
      <Nav.Link as= {Link} to="/About">AboutUs</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>

    </div>
    <div>
      <Routes>
 <Route path= '/' element={<Home/>}/>  
 <Route path= '/Login' element={<Login/>}/>  
 <Route path= '/Player' element={<Player/>}/> 
 <Route path= '/About' element={<About/>}/> 
 </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
