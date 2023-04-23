import { InputContainer } from "./styles"
import PropTypes from "prop-types"
import { IMaskInput } from "react-imask"
import Select from "react-select"

const Input = ({id, type="text", title, icon, placeholder, errorMessage, ...inputProps}) => {

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
        {type === "phone" && 
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
            required
          />
        }        
      </div>
      {errorMessage && 
        <p className="error-message">{errorMessage}</p>
      }
    </InputContainer>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object
}

export { Input }