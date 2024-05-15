import "./input.scss"
import { string, func } from 'prop-types'

const Input = ({ type, value, onChange, id, name, label, className }) => {
  return (
    <>
    <div className="div-input">
        <label htmlFor={name}>{label}</label>
        <input 
            type={type} 
            value={value} 
            onChange={onChange}  
            name={name}
            id={id}
            className={className}
        />
    </div>
    </>
  )
}

Input.propTypes = {
    type: string, 
    value: func, 
    onChange: func, 
    id: func, 
    name: string,
    label: string,
    className: string
}

export default Input;