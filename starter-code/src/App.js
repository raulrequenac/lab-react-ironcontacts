import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;
