import { DELETE_CONTACTS } from './types'
import request from '../helpers/request'
import removeLoader from './removeLoader'

class DeleteContact {
  constructor(id, dispatch) {
    this.id = id
    this.dispatch = dispatch
    this.request()
  }

  request() {
    request
      .delete(`/users/${this.id}`)
      .then(this.success)
      .catch(this.error)
  }

  success = () => {
    removeLoader(this.dispatch)
    this.dispatch({
      type: DELETE_CONTACTS,
      payload: this.id,
    })
  }

  error = () => {
    removeLoader(this.dispatch)
  }
}

export default id => dispatch => new DeleteContact(id, dispatch)
