import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function nav () {
     return ( 
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> Blue-peach orthopedique </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Aceuil</Nav.Link>
      <Nav.Link href="#link">Magasin</Nav.Link>
      <NavDropdown title="Voir plus" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Acheter</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Passer comande </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Offres</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"> contact </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Recherche " className="mr-sm-2" />
      <Button variant="outline-success">Rechrche</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
     )
}

export default nav