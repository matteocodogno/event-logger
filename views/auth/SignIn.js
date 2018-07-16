import React from 'react';
import {
  Container, Content
} from 'native-base';
import { GoogleSigninButton } from 'react-native-google-signin';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  signIn = () => {
    const { login, navigation } = this.props;
    login();
    navigation.navigate('App');
  };

  render() {
    return (
      <Container>
        <Content>
          <GoogleSigninButton
            style={{ height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
          />
        </Content>
      </Container>
    );
  }
}
