import toast from 'react-hot-toast';
import { combineReducers } from 'redux';
import { ADD, DELETE, CHANGE_FILTER } from './phone-book-types';
import initialContacts from '../../Phonebook/contacts.json';

const contacts = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case ADD:
      if (state.find(contact => contact.nick === payload.nick)) {
        const notify = `${payload.nick} is already on list`;
        toast.error(notify);
        return state;
      }
      state = [...state, payload];
      toast.success('Contact added!');
      console.log(state);
      return state;
    case DELETE:
      state = state.filter(({ id }) => id !== payload);
      console.log(state);
      return state;
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  contacts,
  filter,
});
