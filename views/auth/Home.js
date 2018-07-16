import React from 'react';
import {
  Button, Container, Text, Grid, Col
} from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  showMoreApp = () => {
    const { navigation } = this.props;
    navigation.navigate('Other');
  };

  signOut = () => {
    const { logout, navigation } = this.props;
    logout();
    navigation.navigate('Auth');
  };

  render() {

    return (
      <Container>
        <Grid>
          <Col>
            <Button bordered block dark onPress={this.showMoreApp}>
              <Text>
                Show me more of the app
              </Text>
            </Button>
          </Col>
          <Col>
            <Button danger block onPress={this.signOut}>
              <Text>
                Actually, sign me out :)
              </Text>
            </Button>
          </Col>
        </Grid>
      </Container>
    );
  }
}
