import React from 'react';
import { Navbar , Nav , Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import  About  from './comp/about'
import  Home  from './comp/home'
import  Skills  from './comp/skills'
import  Project  from './comp/project'
import  Contact  from './comp/contact'


function App() {
  return (
    <BrowserRouter>
    <div className='App' >
       <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">MY PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/project">Project</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
