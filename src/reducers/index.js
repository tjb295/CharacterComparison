import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//to export reducers do combineReducers

export default combineReducers({
    auth: AuthReducer
});