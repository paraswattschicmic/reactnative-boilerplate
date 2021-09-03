import { combineReducers } from 'redux';
import CommonReducer from './common';


const RootReducer = combineReducers({
    common: CommonReducer
})

export default RootReducer;