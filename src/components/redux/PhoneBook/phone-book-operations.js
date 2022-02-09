import axios from 'axios';
import { addContactRequest, addContactSuccess, addContactError} from './phone-book-actions';

axios.defaults.baseURL = 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/';

export const addContact = ({ nick, number }) => dispatch => { 
  const contact = {
    nick,
    number,
  }
  
  dispatch(addContactRequest());

  axios.post('/contacts', contact)
    .then(({ nick, number }) => dispatch(addContactSuccess(nick, number)))
    .catch(error => dispatch(addContactError(error)))
  // axios.get('/contacts').then(r => r.data)
}