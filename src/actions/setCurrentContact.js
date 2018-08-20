import { CURRENT_CONTACT } from './types'

export default (contact, dispatch) => (
  dispatch({
    type: CURRENT_CONTACT,
    payload: contact,
  })
)
