import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/PhoneBook/phone-book-actions';
import {
  ListWrapper,
  ContactItem,
  List,
  ContactData,
  DeleteButton,
} from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ListWrapper>
    <List>
      {contacts.map(({ id, nick, number }) => (
        <ContactItem key={id}>
          <ContactData>
            {nick}: {number}
          </ContactData>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </List>
  </ListWrapper>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nick: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
  // getFoundedContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };

const getFoundedContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.nick.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = state => ({
  contacts: getFoundedContacts(
    state.phonebook.contacts,
    state.phonebook.filter
  ),
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(deleteContact(id)),
  };
};

// rmap

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
