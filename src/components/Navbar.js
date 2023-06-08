import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">First Component</Link>
          </li>
          <li>
             <Link to="/Second ">Second Component</Link>
          </li>
          
       </ul>
 </nav>
 );
};

export default NavBar;