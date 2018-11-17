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
import FamilyInfo1 from './src/screens/FamilyInfo1';
import FamilyInfo2 from './src/screens/FamilyInfo2';
import FamilyInfo3 from './src/screens/FamilyInfo3';
import FamilyInfo4 from './src/screens/FamilyInfo4';
import FamilyInfo5 from './src/screens/FamilyInfo5';
import AgreementPII from './src/screens/AgreementPII';
import FromCanadaGovernment from './src/screens/FromCanadaGovernment';
import Declaration from './src/screens/Declaration';
import Agreement from './src/screens/Agreement';
import AfterApply1 from './src/screens/AfterApply1';
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

const App = createStackNavigator(
  {
    Home: { screen: Home },
    Signup: { screen: Signup },
    Login: { screen: Login },
    Birthday: { screen: Birthday },
    PersonalInfo1: { screen: PersonalInfo1 },
    PersonalInfo2: { screen: PersonalInfo2 },
    PersonalInfo3: { screen: PersonalInfo3 },
    PersonalInfo4: { screen: PersonalInfo4 },
    PersonalInfo5: { screen: PersonalInfo5 },
    PersonalInfo6: { screen: PersonalInfo6 },
    FamilyInfo1: { screen: FamilyInfo1 },
    FamilyInfo2: { screen: FamilyInfo2 },
    FamilyInfo3: { screen: FamilyInfo3 },
    FamilyInfo4: { screen: FamilyInfo4 },
    FamilyInfo5: { screen: FamilyInfo5 },
    AgreementPII: { screen: AgreementPII },
    FromCanadaGovernment: { screen: FromCanadaGovernment },
    Declaration: { screen: Declaration },
    Agreement: { screen: Agreement },
    AfterApply1: { screen: AfterApply1 },
    WHApply: { screen: WHApply },
    Help: { screen: Help },
    DeleteAll: { screen: DeleteAll },
    UpdatePassword: { screen: UpdatePassword },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisble: false,
      gesturesEnabled: false,
    },
  },
);

export default App;
