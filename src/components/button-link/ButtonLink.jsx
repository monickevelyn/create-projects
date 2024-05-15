import { Link } from "react-router-dom";
import { string } from 'prop-types';
import "./button-link.scss"

const ButtonLink = ({ to, text }) => {
  return (
    <>
    <Link className="button-link" to={to}>
        {text}
    </Link>
    </>
  )
}

ButtonLink.propTypes = { to:string, text: string }
export default ButtonLink;