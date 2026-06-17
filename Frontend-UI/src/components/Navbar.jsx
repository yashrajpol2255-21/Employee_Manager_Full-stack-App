import {Link} from "react-router-dom";
function Navbar(){
  return(
    <nav className="navbar">
      <Link to="/">
         Dashboard
      </Link>

      <Link to="/employees">
        Employees
      </Link>

      <Link to="/about">
        About
      </Link>
    </nav>
  );
}
export default Navbar;