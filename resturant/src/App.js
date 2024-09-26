import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import ResturantsCreate from './components/ResturantsCreate';
import ResturantsDetails from './components/ResturantsDetails';
import ResturantsList from './components/ResturantsList';
import ResturantsSearch from './components/ResturantsSearch';
import ResturantsUpdate from './components/ResturantsUpdate';
import Home from './components/Home';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faPen, faCircle } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Resturant-Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"> <Link to="/"> <FontAwesomeIcon icon={faHome} color="orange" />  Home  </Link>  </Nav.Link>
                <Nav.Link href="#link"> <Link to="/list"> <FontAwesomeIcon icon={faList} color="orange" />  List </Link>  </Nav.Link>
                <Nav.Link href="#home"> <Link to="/create"> <FontAwesomeIcon icon={faPlus} color="orange" />  Create</Link>  </Nav.Link>
                <Nav.Link href="#link"> <Link to="/search"> <FontAwesomeIcon icon={faSearch} color="orange" />  Search</Link>  </Nav.Link> 
                <Nav.Link href="#home"> <Link to="/details"> <FontAwesomeIcon icon={faCircle} color="orange" />  Details</Link>  </Nav.Link>
                <Nav.Link href="#link"> <Link to="/update"> <FontAwesomeIcon icon={faPen} color="orange" />  Updates</Link> </Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/list' element={<ResturantsList /> }  />
          <Route path='/create' element={<ResturantsCreate />} />
          <Route path='/details' element={<ResturantsDetails />} />
          <Route path='/update/:id' render={props=>(<ResturantsUpdate {...props} />)} />
          <Route path='/search' element={<ResturantsSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
