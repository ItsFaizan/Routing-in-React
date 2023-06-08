import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
    <nav>
       <ul>
          <li>
             <NavLink to="/">FirstComponent</NavLink>
          </li>
          <li>
             <NavLink to="/second">SecondComponent</NavLink>
          </li>
          
       </ul>
    </nav>
 );
};

export default NavBar;