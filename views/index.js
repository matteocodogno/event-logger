import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
import AuthLoadingScreen from './auth/AuthLoading';
import SignInScreen from './auth/SignIn';
import HomeScreen from './auth/Home';

const AppStack = createStackNavigator({
  Home: HomeScreen
  // Other: OtherScreen
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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
