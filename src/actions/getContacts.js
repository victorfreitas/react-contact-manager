import request from '../helpers/request'
import { GET_CONTACTS, CURRENT_CONTACT } from './types'

class GetContacts {
  constructor(id, dispatch) {
    this.id = id
    this.dispatch = dispatch
    this.request()
  }

  getUrl() {
    return `/users/${this.id ? this.id : ''}`
  }

  async request() {
    const data = await request(this.getUrl())

    this.dispatch({
      type: this.id ? CURRENT_CONTACT : GET_CONTACTS,
      payload: data,
    })
  }
}

export default id => dispatch => (
  new GetContacts(id, dispatch)
)
