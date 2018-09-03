import { ADD_CONTACT, UPDATE_CONTACT } from './types'
import request from '../helpers/request'
import removeLoader from './removeLoader'

class MakeContact {
  constructor(contact, dispatch) {
    this.contact = contact
    this.dispatch = dispatch
    this.init()
  }

  init() {
    this.setProps()
    this.request()
  }

  setProps() {
    const { id } = this.contact
    this.method = id ? 'put' : 'post'
    this.type = id ? UPDATE_CONTACT : ADD_CONTACT
    this.url = `/users/${id ? id : ''}`
  }

  request() {
    request[this.method](this.url, this.contact)
      .then(this.contact)
      .catch(this.error)
  }

  success = contact => {
    removeLoader(this.dispatch)
    this.dispatch({
      type: this.type,
      payload: contact,
    })
  }

  error = () => {
    removeLoader(this.dispatch)
  }
}

export default contact => dispatch => new MakeContact(contact, dispatch)
