import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeContact, setCurrentContact, fetchContacts, setIsWait } from '../../../actions'
import Form from '../../../components/pages/Contact/Form'

Form.propTypes = {
  current: PropTypes.object.isRequired,
  makeContact: PropTypes.func.isRequired,
  setCurrentContact: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  setIsWait: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.contact.current,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  makeContact,
  setCurrentContact,
  fetchContacts,
  setIsWait,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
