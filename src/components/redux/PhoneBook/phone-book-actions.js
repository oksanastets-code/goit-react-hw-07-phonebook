import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact', (nick, number) => {
  return {
    payload: {
      id: nanoid(),
      nick: nick,
      number: number,
    },
  };
});
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');

// export const addContact = (nick, number) => ({
//   type: ADD,
//   payload: {
//     id: nanoid(),
//     nick: nick,
//     number: number,
//   },
// });
// export const deleteContact = contactId => ({
//     type: DELETE,
//     payload: contactId,
// });
// export const changeFilter = (value) => ({
//     type: CHANGE_FILTER,
//     payload: value,
// })
