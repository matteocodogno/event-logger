import React from 'react';
import { AsyncStorage } from 'react-native';
import { Button, Container, Content, Text } from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.showMoreApp}>
            <Text>
              Show me more of the app
            </Text>
          </Button>
          <Button onPress={this.signOutAsync}>
            <Text>
              Actually, sign me out :)
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
