import { combineReducers } from 'redux';

const valueReducer = (state = 10, { type, payload }) => { 
    switch (type) { 
        case 'counter/Increment':
            return state + payload;
        case 'counter/Decrement':
            return state - payload;
        default:
            return state;
    }
}
const stepReducer = (state = 5, action) => state;
export default counterReducer = combineReducers({
     value: valueReducer,
        step: stepReducer, 
})