import './navbar.scss'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
         <header className="header">
            <Link to="/" className="logo">
                Projects
            </Link>

            <nav className="nav-bar">
                <NavLink to="/" className="link">Home</NavLink> 
                <NavLink to="/project" className="link">Projetos</NavLink> 
            </nav>
         </header>
        </>
    );
}
export default NavBar;