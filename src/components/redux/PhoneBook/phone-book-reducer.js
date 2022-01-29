import { combineReducers } from 'redux';
import {
    ADD,
    DELETE,
    CHANGE_FILTER,
    GET_FOUNDED_CONTACTS
} from './phone-book-types';

// phonebook: {
//     contacts: [],
//     filter: '',
//   },
    
const contacts = (state = [], { type, payload }) => {
    switch (type) { 
        case 'ADD':
            return [...state, payload];

            
            
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
