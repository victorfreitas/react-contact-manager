import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteContact, setIsWait } from '../../../../actions'
import Contact from '../../../../components/pages/Home/Contact'

Contact.propTypes = {
  handleClickInfo: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setIsWait: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteContact,
  setIsWait,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(Contact)
