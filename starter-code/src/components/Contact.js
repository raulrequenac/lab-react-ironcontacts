import React, { Component } from 'react'
import './ContactList.css'
import Contacts from '../contacts.json'

class Contact extends Component {
  state = {
    fiveContacts: Contacts.slice(0,5)
  }

  render() {
    return (
      <div>
        {this.state.fiveContacts.map((contact) => {
          return (
            <div className="row">
              <img alt="picurl" src={contact.pictureUrl} width="100" className="space"></img>
              <p className="space">{contact.name}</p>
              <p className="space">{contact.popularity}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Contact
