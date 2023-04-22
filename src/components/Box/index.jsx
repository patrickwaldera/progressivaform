import { BoxContainer } from "./styles"
import PropTypes from 'prop-types'

const Box = ({ children }) => {
  return (
    <BoxContainer>
      <a className="logo" href="https://aprogressiva.com.br/">
        <img src="/logo.png" alt="" />
      </a>
      {children}
    </BoxContainer>
  )
}

Box.propTypes = {
  children: PropTypes.node
}

export { Box }
