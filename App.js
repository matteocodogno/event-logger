import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import {
  Root, Container, List, ListItem, Text, StyleProvider, Spinner
} from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import { configureStore } from './store/init';

const store = configureStore();


export default class App extends React.Component {
  state = { loading: true };

  async componentWillMount() {
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return (
        <Root>
          <Spinner color='blue' />
        </Root>
      );
    }

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <Container>
            <List>
              <ListItem>
                <Text>Mtg. Mr Bob</Text>
              </ListItem>
              <ListItem>
                <Text>Call John</Text>
              </ListItem>
              <ListItem>
                <Text>Interview Anne K.</Text>
              </ListItem>
            </List>
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}

// https://github.com/facebook/react-native/issues/18868
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
