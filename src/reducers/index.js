import { combineReducers } from 'redux'

import contact from './contact'
import isWait from './isWait'

export default combineReducers({
  contact,
  isWait,
})
