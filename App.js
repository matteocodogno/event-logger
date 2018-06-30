import React from 'react';
import Provider from 'react-redux';
import {Root, Container, List, ListItem, Text, StyleProvider, Spinner} from 'native-base';
import {Font} from 'expo';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Header from './components/Header';

import {configureStore} from './store/init';

const store = configureStore();


export default class App extends React.Component {
  state = {loading: true};

  async componentWillMount() {
    await Font.loadAsync({
      Roboto       : require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({loading: false});
  }


  render() {
    if (this.state.loading) {
      return (
        <Root>
          <Spinner color='blue'/>
        </Root>
      );
    }

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <Container>
            <Header/>
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

