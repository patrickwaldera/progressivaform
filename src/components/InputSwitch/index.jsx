import PropTypes from 'prop-types'
import { InputContainer } from './styles'

const InputSwitch = ( { id, text, ...inputProps } ) => {
  return (
    <InputContainer>
      <label className='text' htmlFor={id}>{text} <span>*</span></label>
      <div>
        <label className="switch">
          <input type="checkbox" id={id} {...inputProps} />
          <span className="slider round"></span>
        </label>
      </div>
    </InputContainer>
  )
}

InputSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inputProps: PropTypes.object  
}

export { InputSwitch }