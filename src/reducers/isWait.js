import { IS_WAIT } from '../actions/types'

export default (state = false, action) => {
  switch (action.type) {
    case IS_WAIT:
      return action.payload

    default:
      return state
  }
}
