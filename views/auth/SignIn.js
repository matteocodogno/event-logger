import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  Button, Container, Content, Text
} from 'native-base';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor() {
    super();

    GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
        GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          iosClientId: '127517433034-bpb3ebnag08ms1giuvk8vvq0cpr0sfr0.apps.googleusercontent.com', // only for iOS
          forceConsentPrompt: true,
          offlineAccess: true,
        }).then(() => {
          console.log('Google SignIn configured');
        }).catch(err => console.log('Google configuration failed', err));
      })
      .catch(err => {
        console.log('Play services error', err.code, err.message);
      });
  }

  state = {
    user: null
  };

  _signIn = async () => {
    try {
      console.log('SignIn');
      const user = await GoogleSignin.signIn();
      console.log('User', user);
      this.setState({ user });
      this._persistAccessToken();
    } catch (error) {
      console.log('SignIn error: ', error);
      if (error.code === 'CANCELED') {
        // user cancelled the login flow
      } else {
        // some other error happened
      }
    }
  };

  getCurrentUser = async () => {
    try {
      const user = await GoogleSignin.currentUserAsync();
      this.setState({ user });
    } catch (error) {
      console.error(error);
    }
  };

  _persistAccessToken = () => {
    GoogleSignin.getAccessToken()
      .then(async token => {
        console.log(token);
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate('App');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <GoogleSigninButton
            style={{ height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
          />
        </Content>
      </Container>
    );
  }
}
