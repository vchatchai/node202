import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';


import initialState  from './initialState'

export default createStore(combineReducers({
}), initialState)