import LoginScreen from '../screens/auth_screens/LoginScreen';
import SignScreen from '../screens/auth_screens/SignScreen';
import HomeScreen from '../screens/logined_screen/HomeScreen';

export const route = [
  {name: 'Login', component: LoginScreen},
  {name: 'CreateUser', component: SignScreen},
  {name: 'Home', component: HomeScreen},
];
