// import * as ActionsTypes from '../actiontypes/authenticate'
import { AUTH, REMOVE_AUTH, REGISTER } from "../actiontypes/authenticate";

const initialState = {
  isAuthenticated: false,
  isLoading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AUTH.SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };
    }
    case AUTH.FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };
    }
    case REMOVE_AUTH.REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false        
      };
    }
    case REGISTER.SUCCESS:
    default: {
      return {
        ...state
      };
    }
  }
};

export default auth;
