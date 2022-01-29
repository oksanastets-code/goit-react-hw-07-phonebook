import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changeFilter }  from '../redux/PhoneBook/phone-book-actions';

import { FilterLabel, FilterInputField } from './Filter.styled';
const Filter = ({ value, onChange }) => (
  <FilterLabel htmlFor="">
    Find contacts by name
    <FilterInputField
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="Enter key word"
    />
  </FilterLabel>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({  
    value: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({ 
    onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
