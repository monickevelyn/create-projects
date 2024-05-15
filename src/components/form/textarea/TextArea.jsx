import "./textarea.scss"
import { string, func } from 'prop-types'

const TextArea = ({ name, label, value, onChange, id }) => {
  return (
    <>
    <div className="div-textarea">
        <label htmlFor={name}>{label}</label>
        <textarea cols='30' rows='8' value={value} onChange={onChange} name={name} id={id}>
            {value}
        </textarea>
    </div>
    </>
  )
}

TextArea.propTypes = { 
    name: string, label: string, value: func, onChange: func, id: func
}
export default TextArea