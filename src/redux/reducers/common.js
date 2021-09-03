import { REHYDRATE } from 'redux-persist';
import {
  START_LOADING,
  STOP_LOADING,
  UPDATE_AUTH_TOKEN,
  UPDATE_INTERNET_STATUS,
  RESET,
} from '../actions';

const initialState = {
  loading: false,
  authToken: null,
  netConnected: true,
  /**
   * TODO:
   * 1.) Save Current user on app open or save when user sign in ( Default User )
   * 2.) Currently we are not getting user data on sign in
   * 3.) Save self as Current user on REHYDRATE
   */
  currentUser: null
};

const CommonReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload
      }
    case UPDATE_INTERNET_STATUS:
      return {
        ...state,
        netConnected: action.payload
      }
    case REHYDRATE:
      return {
        ...initialState,
        ...((action.payload || {}).common || {}),
        loading: false,
        netConnected: true,
        currentUser: null
      };
    case RESET:
      return {
        ...initialState,
        netConnected: state.netConnected,
        authToken: null
      }
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
