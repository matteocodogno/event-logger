import { GoogleSignin } from 'react-native-google-signin';

import { actionTypes } from './types';

/**
 * It is mandatory to call this method before login.
 *
 * @returns {Promise<T | void>}
 * @private
 */
const _configure = async () => GoogleSignin
  .configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    iosClientId: '127517433034-bpb3ebnag08ms1giuvk8vvq0cpr0sfr0.apps.googleusercontent.com', // only for iOS
    forceConsentPrompt: true,
    offlineAccess: true,
  })
  .catch(err => console.error('Google configuration failed', err));

export const login = () => async dispatch => {
  await _configure();

  const user = await GoogleSignin.signIn();
  console.log('User', user);
  dispatch({
    type: actionTypes.LOGIN,
    payload: user
  });
};

export const logout = () => async dispatch => {
  await _configure();

  // await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();

  dispatch({
    type: actionTypes.LOGOUT
  });
};
