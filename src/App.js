import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/tugas11">tugas11</Link>
            </li>
            <li>
              <Link to="/tugas12">tugas12</Link>
            </li>
            <li>
              <Link to="/tugas13">tugas13</Link>
            </li>
            <li>
              <Link to="/tugas14">tugas14</Link>
            </li>
            <li>
              <Link to="/tugas15">tugas15</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes/>
    </Router> 
  );
}

export default App;
