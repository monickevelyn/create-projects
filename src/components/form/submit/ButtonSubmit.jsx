import "./button-submit.scss"
import { string } from 'prop-types'

const ButtonSubmit = ({ text }) => {
  return (
    <>
    <div>
        <button className="button-submit">{text}</button>
    </div>
    </>
  )
}

ButtonSubmit.propTypes = { text: string }
export default ButtonSubmit