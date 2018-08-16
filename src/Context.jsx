import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  const { contacts } = state

  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: contacts.filter(({ id }) => action.payload !== id),
      }

      default:
        return state
  }
}

class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@mail.co',
          phone: '432-123-258',
        },
        {
          id: 2,
          name: 'Mary Doe',
          email: 'mdoe@mail.ru',
          phone: '987-456-321',
        },
        {
          id: 3,
          name: 'Karen Willian',
          email: 'karen@gmail.com',
          phone: '256-222-999',
        },
      ],
      dispatch: action => {
        this.setState(state => reducer(state, action))
      },
    }
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
