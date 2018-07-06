import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  Button, Container, Content, Text
} from 'native-base';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.signInAsync}>
            <Text>Sign in!</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
