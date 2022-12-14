import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Navigationbar from './pages/Navbar';
import Dashboard from './pages/dashboard';
import Admindash from './Admin/adminUser/admindashboard';
import Ongoing from './Admin/adminUser/Ongoing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Admin/adminUser/Body';
import Cancelled from './Admin/adminUser/Cancelled';
import Timebased from './Admin/adminUser/Timebased';
import User from './Admin/adminUser/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/completed" exact element={<Body/>}/>
            <Route path="/ongoing" exact element={<Ongoing/>}/>
            <Route path="/cancelled" exact element={<Cancelled/>}/>
            <Route path="/timebased" exact element={<Timebased/>}/>
            <Route path="/user" exact element={<User/>}/>
        </Routes>
      </Router>
      {/* <p>it is working</p>
      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </div>
  );
}

export default App;
