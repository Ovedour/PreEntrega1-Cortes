import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.css'
import cart from './cart.png'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">            
            <Nav.Link href="#cart"><img className='cart' src={cart}></img>Número hardcodeado: 7</Nav.Link>
          </Nav>
        </Container>
        
          
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;