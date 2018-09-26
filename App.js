import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import PersonalInfo1 from './src/screens/PersonalInfo1';
import WHApplyNotification1 from './src/screens/WHApplyNotification1';
import WHApply from './src/screens/WHApply';
import SplashScreen from './src/screens/SplashScreen';

const App = createStackNavigator({
  Splash:               { screen: SplashScreen },
  Home:                 { screen: Home },
  WHApply:              { screen: WHApply },
  PersonalInfo1:        { screen: PersonalInfo1 },
  WHApplyNotification1: { screen: WHApplyNotification1 },
}, {
  headerMode: 'none',
  navigationOptions:{
    headerVisble: false,
  },
});


export default App;
