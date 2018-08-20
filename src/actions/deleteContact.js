import { DELETE_CONTACTS } from './types'
import request from '../helpers/request'

export default id => dispatch => (
  request.delete(`/users/${id}`)
    .then(() => (
      dispatch({
        type: DELETE_CONTACTS,
        payload: id,
      })
    ))
    .catch(() => {})
)
