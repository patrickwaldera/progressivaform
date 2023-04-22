import PropTypes from 'prop-types'
import { FormContainer, FormWrapper } from './styles'

const Form = ({children, title, ...propsForm}) => {
  return (
    <FormContainer {...propsForm}>
      <div className='form-content'>
        <h3>{title}</h3>
        <FormWrapper>
          {children}
        </FormWrapper>
      </div>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  propsForm: PropTypes.object
}

export { Form }