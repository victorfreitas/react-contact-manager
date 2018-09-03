import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchContacts, setIsWait } from '../../../actions'
import Home from '../../../components/pages/Home'

Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  setIsWait: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchContacts,
  setIsWait,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
