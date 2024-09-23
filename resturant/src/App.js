import './App.css';
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

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/update">Updates</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/list' element={<ResturantsList />} />
          <Route path='/create' element={<ResturantsCreate />} />
          <Route path='/details' element={<ResturantsDetails />} />
          <Route path='/update' element={<ResturantsUpdate />} />
          <Route path='/search' element={<ResturantsSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
