import React, { Component } from 'react'

import request from './helpers/request'

const Context = React.createContext()

const reducer = (state, action) => {
  const { contacts } = state

  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: contacts.filter(({ id }) => action.payload !== id),
      }

    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => (
          action.payload.id === contact.id ? action.payload : contact
        ))
      }

      default:
        return state
  }
}

class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      dispatch: action => {
        this.setState(prevState => reducer(prevState, action))
      },
    }
  }

  async componentDidMount() {
    const response = await request('/users')
    this.setState({ contacts: response  })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
export const Consumer = Context.Consumer
