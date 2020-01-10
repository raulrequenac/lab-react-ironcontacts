import React, { Component } from 'react'
import './Contacts.css'
import Contact from './Contact'
import contactsData from '../contacts.json'

class ContactList extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    this.setState({contacts: contactsData.slice(0,5)})
  }

  onClickRandomContact() {
    if (this.state.contacts.length < contactsData.length) {
      let randomContact = {}
      do {
        const randomNumber = Math.floor(Math.random() * contactsData.length)
        randomContact = contactsData[randomNumber]
      } while (this.state.contacts.some(contact => (contact.name === randomContact.name)))

      this.setState({
        contacts: [...this.state.contacts, randomContact]
      })
    }
  }

  onClickSortByName() {
    this.setState({
      contacts: this.state.contacts.sort((contactA, contactB) => {
        if (contactA.name < contactB.name) {
          return -1
        } else if (contactA.name > contactB.name){
          return 1
        } else {
          return 0
        }
      })
    })
  }

  onClickSortByPopularity() {
    this.setState({
      contacts: this.state.contacts.sort((contactA, contactB) => contactB.popularity - contactA.popularity)
    })
  }

  onClickDeleteContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c => c.name !== contact.name)
    })
  }

  render() {
    const contactList = this.state.contacts.map(contact => (
      <div>
        <Contact 
          {...contact}
          onClickDelete={() => this.onClickDeleteContact(contact)}
        />
      </div>
    ))

    return (
      <div className="ContactList">
        {contactList.length === 0 ? 'Loading...' : (
          <div>
            <div className="row">
            <button className="space" onClick={() => this.onClickRandomContact()}>Add Random Contacts</button>
            <button className="space" onClick={() => this.onClickSortByName()}>Sort by name</button>
            <button className="space" onClick={() => this.onClickSortByPopularity()}>Sort by popularity</button>
            </div>
            <div className="row">
              <h3 className="space">Picture</h3>
              <h3 className="space">Name</h3>
              <h3 className="space">Popularity</h3>
              <h3 className="space">Action</h3>
            </div>
            {contactList}
          </div>
        )}
      </div>
    )
  }
}

export default ContactList
