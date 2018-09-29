import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import WHApply from './src/screens/WHApply';
import PersonalInfo1 from './src/screens/PersonalInfo1';
import PersonalInfo2 from './src/screens/PersonalInfo2';
import PersonalInfo3 from './src/screens/PersonalInfo3';
import PersonalInfo6 from './src/screens/PersonalInfo6';
import WHApplyNotification1 from './src/screens/WHApplyNotification1';
import WHApplyNotification2 from './src/screens/WHApplyNotification2';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const App = createStackNavigator({
  PersonalInfo3:        { screen: PersonalInfo3 },
  Home:                 { screen: Home },
  Splash:               { screen: SplashScreen },
  Login:                { screen: Login },
  Signup:               { screen: Signup },
  WHApplyNotification1: { screen: WHApplyNotification1 },
  WHApplyNotification2: { screen: WHApplyNotification2 },
  PersonalInfo6:        { screen: PersonalInfo6 },
  WHApply:              { screen: WHApply },
  PersonalInfo1:        { screen: PersonalInfo1 },
  PersonalInfo2:        { screen: PersonalInfo2 },

}, {
  headerMode: 'none',
  navigationOptions:{
    headerVisble: false,
  },
});


export default App;
