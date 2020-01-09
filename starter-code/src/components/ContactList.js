import React, { Component } from 'react'
import './ContactList.css'
import Contact from './Contact'

class ContactList extends Component {
  render() {
    return (
      <div className="ContactList">
        <div className="row">
          <h3 className="space">Picture</h3>
          <h3 className="space">Name</h3>
          <h3 className="space">Popularity</h3>
        </div>
        <Contact />
      </div>
    )
  }
}

export default ContactList
