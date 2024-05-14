import "./footer.scss"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
        <footer className="footer">
            <ul className="social-list">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className="costs-copy">
                <span>Projects</span> &copy; 2024
            </p>
        </footer>
        </>
    );
}
export default Footer;