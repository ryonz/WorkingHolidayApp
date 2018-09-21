import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import PersonalInfo1 from './src/screens/PersonalInfo1';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <PersonalInfo1 />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
