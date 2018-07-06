import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import { Container } from 'native-base';

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(() => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }, 3000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </Container>
    );
  }
}
