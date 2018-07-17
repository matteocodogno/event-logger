import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
import AuthLoadingScreen from './auth/AuthLoading';
import SignInScreen from './auth/SignIn';
import HomeScreen from './auth/Home';

const AppStack = createStackNavigator({
  Home: HomeScreen
  // Other: OtherScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(32,32,32)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(32,32,32)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
