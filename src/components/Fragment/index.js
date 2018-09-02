import PropTypes from 'prop-types'

const Fragment = ({ show, children }) => show ? children : null

Fragment.defaultProps = {
  show: true,
}

Fragment.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Fragment
