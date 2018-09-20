import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import WHApply from './src/screens/WHApply';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WHApply />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});
