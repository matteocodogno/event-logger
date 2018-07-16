import { actionTypes } from './types';

const initialState = {
  id: null,
  name: '',
  givenName: '',
  familyName: null,
  email: null,
  photo: null,
  idToken: null,
  serverAuthCode: null,
  scopes: null,
  accessToken: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
