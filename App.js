import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import {
  Root, StyleProvider, Spinner
} from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import Routes from './views';

import { configureStore } from './store/init';

const { store, persistor } = configureStore();


export default class App extends React.Component {
  _loading = () => (
    <Root>
      <Spinner color='blue' />
    </Root>
  );

  onBeforeLift = () => {
    // take some action before the gate lifts
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={this._loading()}
          onBeforeLift={this.onBeforeLift}
          persistor={persistor}
        >
          <StyleProvider style={getTheme(material)}>
            <Routes />
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

// https://github.com/facebook/react-native/issues/18868
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
