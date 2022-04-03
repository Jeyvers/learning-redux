import { createStore, combineReducers } from 'redux';
import homePage from './containers/Homepage/reducers';

const reducers = combineReducers({ homePage });

export default createStore(reducers);
