import {BrowserRouter as Router, Route, Link, RouteHandler} from 'react-router-dom';
import { Login } from './Login';
// Sample components for different routes

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Link components to navigate to different routes */}
            <li>
            <Route path="/login">
                <Login />
             </Route>
            </li>
          </ul>
        </nav>

        
      </div>
    </Router>
  );
};

export default NavBar;