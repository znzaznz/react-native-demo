import LoginScreen from '../screens/auth_screens/LoginScreen';
import SignScreen from '../screens/auth_screens/SignScreen';
import HomeScreen from '../screens/logined_screen/HomeScreen';
import SecondScreen from '../screens/logined_screen/SecondScreen';

export const route = [
  {name: 'Login', component: LoginScreen},
  {name: 'SignUser', component: SignScreen},
  {name: 'Home', component: HomeScreen},
  {name: 'Second', component: SecondScreen},
];
