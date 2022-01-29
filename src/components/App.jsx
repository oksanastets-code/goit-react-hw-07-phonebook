import React, { Component } from 'react';

// import Phonebook from './Phonebook';
// import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import NameEditor from './Phonebook/NameEditor';
import ContactList from './Phonebook/ContactList';
// import Filter from './Phonebook/Filter';
import { Container } from './Phonebook/PhoneBook.styled';

import Counter from './Counter';




class App extends Component {
  //  state = {
    // contacts: [],
    // filter: '',
  // };
  // addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   if (this.state.contacts.find(contact => contact.name === name)) {
  //     const notify = `${name} is already on list`;
  //     toast.error(notify);
  //     return;
  //   }
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  //   toast.success('Contact added!');
  //   return;
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // getFoundedContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };
  // componentDidMount() {
  //   console.log('App componentDidMount');
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   } else {
  //     this.setState({ contacts: initialContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('App componentDidUpdate');
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    
//  const foundedContacts = this.getFoundedContacts();
    return (
      <>
         <Container>
        <Toaster />
        <h1>Phonebook</h1>
        <NameEditor />
        <h2>Contacts</h2>
        {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
          <ContactList
            // contacts={foundedContacts}
            // onDeleteContact={this.deleteContact}
          />
      </Container>
        <Counter initialValue={10} />
      </>

    );
  }
}

export default App;