import React from 'react'

export default ({ show, contact }) => show ? (
  <ul className="list-group">
    <li className="list-group-item">Email: {contact.email}</li>
    <li className="list-group-item">Phone: {contact.phone}</li>
  </ul>
) : null
