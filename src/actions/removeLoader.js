import { IS_WAIT } from './types'

export default dispatch => dispatch({
  type: IS_WAIT,
  payload: false,
})
