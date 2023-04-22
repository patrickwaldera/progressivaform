import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ text, ...propsBtn }) => {
  return (
    <StyledButton {...propsBtn} >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  propsBtn: PropTypes.object
}

export { Button }
