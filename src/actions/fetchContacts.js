import request from '../helpers/request'
import { GET_CONTACTS, CURRENT_CONTACT } from './types'

class FetchContacts {
  constructor(id, dispatch) {
    this.id = id
    this.dispatch = dispatch
    this.request()
  }

  getPath() {
    return `/users/${this.id ? this.id : ''}`
  }

  request() {
    request(this.getPath())
      .then(this.success)
      .catch(this.error)
  }

  success = data => {
    this.dispatch({
      type: this.id ? CURRENT_CONTACT : GET_CONTACTS,
      payload: data,
    })
  }

  error = () => {}
}

export default id => dispatch => new FetchContacts(id, dispatch)
