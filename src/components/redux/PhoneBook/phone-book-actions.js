import { nanoid } from 'nanoid';
// import toast, { Toaster } from 'react-hot-toast';

import {
    ADD,
    DELETE,
    CHANGE_FILTER,
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
});
export const changeFilter = (value) => ({
    type: CHANGE_FILTER,
    payload: value,
})