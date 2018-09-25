import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Home from './src/screens/Home';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Home />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//import WHApplyNotification1 from './src/screens/WHApplyNotification1';
//import PersonalInfo1 from './src/screens/PersonalInfo1';


// <WHApplyNotification1 />
