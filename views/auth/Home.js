import React from 'react';
import {
  Button, Container, Text, Grid, Col
} from 'native-base';
import { connect } from 'react-redux';

import { logout } from '../../store/auth/actions';

class Home extends React.Component {
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
    const { name } = this.props;
    return (
      <Container>
        <Grid>
          <Col>
            <Text>
              {name}
            </Text>
          </Col>
        </Grid>
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

const mapStateToProps = state => ({
  name: state.auth.name
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
