import React from 'react';
import { StyleSheet, View } from 'react-native';

import WHApply from './src/screens/WHApply';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WHApply />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
