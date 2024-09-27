import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ResturantsCreate from './components/ResturantsCreate';
import ResturantsDetails from './components/ResturantsDetails';
import ResturantsList from './components/ResturantsList';
import ResturantsSearch from './components/ResturantsSearch';
import ResturantsUpdate from './components/ResturantsUpdate';
import Home from './components/Home';
import Login from './components/Login';
import NavbarMenue from './components/NavbarMenue';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenue />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/list' element={<ResturantsList />} />
          <Route path='/create' element={<ResturantsCreate />} />
          <Route path='/details' element={<ResturantsDetails />} />
          <Route path='/update/:id' render={props => (<ResturantsUpdate {...props} />)} />
          <Route path='/login' render={props => (<Login {...props} />)} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/search' element={<ResturantsSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
