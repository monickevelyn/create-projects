import './navbar.scss'

const NavBar = () => {
    return ( 
        <>
         <header className="header">
            <div>
                <h4 className="logo">Projects</h4>              
            </div>
            <nav className="nav-bar">
                <p className="link">Home</p>
                <p className="link">Projetos</p>
                <p className="link">Empresa</p>
                <p className="link">Contato</p>
            </nav>
         </header>
        </>
    );
}
export default NavBar;