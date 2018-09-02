import { DELETE_CONTACTS } from './types'
import request from '../helpers/request'

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
    this.dispatch({
      type: DELETE_CONTACTS,
      payload: this.id,
    })
  }

  error = () => {}
}

export default id => dispatch => new DeleteContact(id, dispatch)
