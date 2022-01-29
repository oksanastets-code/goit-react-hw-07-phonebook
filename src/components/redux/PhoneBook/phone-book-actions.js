import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, CHANGE_FILTER } from './phone-book-types';

export const addContact = createAction(ADD, (nick, number) => {
  return {
    payload: {
      id: nanoid(),
      nick: nick,
      number: number,
    },
  };
});
export const deleteContact = createAction(DELETE);
export const changeFilter = createAction(CHANGE_FILTER);

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
