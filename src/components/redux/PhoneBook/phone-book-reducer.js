import { combineReducers } from 'redux';
import {
    ADD,
    DELETE,
    CHANGE_FILTER,
    GET_FOUNDED_CONTACTS
} from './phone-book-types';
import initialContacts from '../../Phonebook/contacts.json';

// phonebook: {
//     contacts: [],
//     filter: '',
//   },
    
const contacts = (state = initialContacts, { type, payload }) => {
    switch (type) { 
        case ADD:
            state = [...state, payload];
            console.log(state);
            return state;
        case DELETE:
            state = state.filter(({ id }) => id !== payload);
            console.log(state);
            return state;

            
            
        default:
           return state;
    }
       
    }
    const filter = (state = '', action) => {
        return state;
    }
export default combineReducers({
  contacts,
  filter,
});
