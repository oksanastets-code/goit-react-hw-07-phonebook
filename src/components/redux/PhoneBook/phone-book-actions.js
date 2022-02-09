// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');
// export const addContact = createAction('phonebook/addContact', (nick, number) => {
//   return {
//     payload: {
//       id: nanoid(),
//       nick: nick,
//       number: number,
//     },
//   };
// });
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');