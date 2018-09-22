import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import WHApplyNotification1 from './src/screens/WHApplyNotification1';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WHApplyNotification1 />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//import PersonalInfo1 from './src/screens/PersonalInfo1';

//  <PersonalInfo1 />
