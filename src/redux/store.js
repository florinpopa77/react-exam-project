import { createStore } from 'redux';
import { peopleReducer } from './peopleReducer';

const store = createStore(peopleReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;