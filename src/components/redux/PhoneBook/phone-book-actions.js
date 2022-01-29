import { nanoid } from 'nanoid';
// import toast, { Toaster } from 'react-hot-toast';

import {
    ADD,
    DELETE,
    CHANGE_FILTER,
    GET_FOUNDED_CONTACTS
} from './phone-book-types';

export const addContact = (nick, number) => ({
    type: ADD,
    payload: {
        id: nanoid(),
        nick: nick,
        number: number,
    }
});
export const deleteContact = contactId => ({
    type: DELETE,
    payload: contactId,
})