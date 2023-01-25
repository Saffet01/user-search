import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [{
      name: "Can",
      phone: "0532 654 7898"
    },
    {
      name: "Saffet",
      phone: "534 456 67 65"
    }]
  }

  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

addContact(contact){
  console.log(contact);
  const{contacts} = this.state;
  contacts.push(contact);
  this.setState({
    contacts:contacts
  });
}

  render() {
    return (
      <div className="App">

        <Contacts addContact={this.addContact} contacts={this.state.contacts} />

      </div>
    );
  }

}

export default App;
