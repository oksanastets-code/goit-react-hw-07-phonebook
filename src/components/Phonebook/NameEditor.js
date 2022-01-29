import { Component } from 'react';
import { connect } from 'react-redux';
import {addContact }  from '../redux/PhoneBook/phone-book-actions';
import PropTypes from 'prop-types';
import { Form, Label, InputField, AddButton } from './NameEditor.styled';
class NameEditor extends Component {
  state = {
    nick: '',
    number: '',
  };
  handleForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { nick, number } = this.state;
    this.props.onSubmit(nick, number);
    this.setState({ nick: '', number: '' });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="">
            Name
            <InputField
              type="text"
              name="nick"
              value={this.state.nick}
              onChange={this.handleForm}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
            />
          </Label>
          <Label htmlFor="">
            Number
            <InputField
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleForm}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Phone number"
            />
          </Label>
          <AddButton type="submit">Add contact</AddButton>
        </Form>
      </>
    );
  }
}
NameEditor.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (nick, number) => dispatch(addContact(nick, number))
})
export default connect(null, mapDispatchToProps)(NameEditor);
