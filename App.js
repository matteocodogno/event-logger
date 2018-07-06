import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import {
  Root, StyleProvider, Spinner
} from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import Routes from './views';

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
          <Routes />
        </StyleProvider>
      </Provider>
    );
  }
}

// https://github.com/facebook/react-native/issues/18868
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
