import {
  GET_CONTACTS,
  DELETE_CONTACTS,
  CURRENT_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from '../actions/types'

const initialState = {
  contacts: [],
  current: {
    name: '',
    email: '',
    phone: '',
    errors: {},
  },
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      }

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => (
          action.payload.id === contact.id ? action.payload : contact
        ))
      }

    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => action.payload !== contact.id
        ),
      }

    case CURRENT_CONTACT:
      return {
        ...state,
        current: {...state.current, ...action.payload},
      }

    default:
      return state
  }
}
