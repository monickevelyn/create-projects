import './navbar.scss'
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
         <header className="header">
            <Link to="/" className="logo">
                Projects
            </Link>

            <nav className="nav-bar">
                <Link to="/" className="link">Home</Link> 
                <Link to="/project" className="link">Projetos</Link> 
                <Link to="/company" className="link">Empresa</Link>            
                <Link to="/contact" className="link">Contato</Link> 
            </nav>
         </header>
        </>
    );
}
export default NavBar;