import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './Counter/counter-reducer';
// const initialState = {
//     counter: {
//         value: 10,
//         step: 5,
//     }
  
// };

// const reducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case 'counter/Increment':
//           return {
//               ...state,
//               counter: {
//                   ...state.counter,
//                   value: state.counter.value + payload,
//               }
//               };

//     case 'counter/Decrement':
//           return {
//              ...state,
//               counter: {
//                   ...state.counter,
//                   value: state.counter.value - payload,
//               }
//           };

//     default:
//       return state;
//   }
// };
// const counterInitialState = {
//     value: 10,
//         step: 5, 
// }

// const counterReducer = combineReducers({
//      value: valueReducer,
//         step: stepReducer, 
// })
    // (state = counterInitialState, { type, payload }) => { 
// 2 refactoring
    //  switch (type) {
//     case 'counter/Increment':
//          return {
//              ...state,
//              value: state.value + payload,
            //  1 refactoring
             //   ...state,
            //   counter: {
            //       ...state.counter,
            //       value: state.counter.value + payload,
            //   }
            //   };
// 2 refactoring
    // case 'counter/Decrement':
    //      return {
    //            ...state,
    //          value: state.value - payload,
            //  1 refactoring
             //  ...state,
            //   counter: {
            //       ...state.counter,
            //       value: state.counter.value - payload,
            //   }
        //   };

//     default:
//       return state;
//   }   
// }
const rootReducer = combineReducers({
    counter: counterReducer,
})
const store = createStore(rootReducer, composeWithDevTools());

export default store;
