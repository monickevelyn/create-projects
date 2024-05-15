// import { Link } from "react-router-dom";
import { string } from 'prop-types';
import "./button-link.scss"

const ButtonLink = ({ text }) => {
  return (
    <>
    {/* <Link className="button-link" to={to}>
        {text}
    </Link> */}
    <a href="">{text}</a>
    </>
  )
}

ButtonLink.propTypes = { text: string }
export default ButtonLink;