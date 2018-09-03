import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../../components/layouts/Spinner'

const mapStateToProps = state => ({
  isWait: state.isWait,
})

Spinner.propTypes = {
  isWait: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Spinner)
