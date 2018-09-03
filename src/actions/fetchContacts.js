import request from '../helpers/request'
import { GET_CONTACTS, CURRENT_CONTACT } from './types'
import removeLoader from './removeLoader'

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
    removeLoader(this.dispatch)
    this.dispatch({
      type: this.id ? CURRENT_CONTACT : GET_CONTACTS,
      payload: data,
    })
  }

  error = () => {
    removeLoader(this.dispatch)
  }
}

export default id => dispatch => new FetchContacts(id, dispatch)
