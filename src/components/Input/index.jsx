import { InputContainer } from "./styles"
import PropTypes from "prop-types"
import { IMaskInput } from "react-imask"
import Select from "react-select"

const Input = ({id, type="text", title, icon, placeholder, ...inputProps}) => {

  return (
    <InputContainer type={type}>
      <label htmlFor={id}>{title} <span>*</span></label>
      <div className="input-content">
        {icon && <>{icon}</>}
        {type === "text" && 
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            {...inputProps}
            required
          />
        }
        {type === "email" &&
          <IMaskInput
            id={id}
            mask="(00) 00000-0000"
            placeholder={placeholder}
            {...inputProps}
            required
          />
        }
        {type === "select" &&
          <Select 
            id={id}
            className="select"
            placeholder={placeholder}
            {...inputProps}
            noOptionsMessage={() => "Nenhum resultado encontrado"}
            
          />
        }        
      </div>
    </InputContainer>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  inputProps: PropTypes.object
}

export { Input }