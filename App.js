import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase';
import ENV from './env.json';

import Home from './src/screens/Home';
import WHApply from './src/screens/WHApply';
import PersonalInfo1 from './src/screens/PersonalInfo1';
import PersonalInfo2 from './src/screens/PersonalInfo2';
import PersonalInfo3 from './src/screens/PersonalInfo3';
import PersonalInfo4 from './src/screens/PersonalInfo4';
import PersonalInfo5 from './src/screens/PersonalInfo5';
import PersonalInfo6 from './src/screens/PersonalInfo6';
import InputEmail from './src/screens/InputEmail';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Birthday from './src/screens/Birthday';
import Help from './src/screens/Help';
import UpdatePassword from './src/screens/UpdatePassword';
import DeleteAll from './src/screens/DeleteAll';

require('firebase/firestore');

// firebaseの認証用config
const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DATABASE_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);


const App = createStackNavigator({
  Home:                 { screen: Home },
  Splash:               { screen: SplashScreen },
  Login:                { screen: Login },
  Signup:               { screen: Signup },
  Birthday:             { screen: Birthday },
  //InputEmailは匿名認証のときに使っていた。なので、いらない。
  InputEmail:           { screen: InputEmail },
  PersonalInfo1:        { screen: PersonalInfo1 },
  PersonalInfo2:        { screen: PersonalInfo2 },
  PersonalInfo3:        { screen: PersonalInfo3 },
  PersonalInfo4:        { screen: PersonalInfo4 },
  PersonalInfo5:        { screen: PersonalInfo5 },
  PersonalInfo6:        { screen: PersonalInfo6 },
  WHApply:              { screen: WHApply },
  Help:                 { screen: Help },
  DeleteAll:            { screen: DeleteAll },
  UpdatePassword:       { screen: UpdatePassword },


}, {
  headerMode: 'none',
  navigationOptions:{
    headerVisble: false,
  },
});


export default App;
