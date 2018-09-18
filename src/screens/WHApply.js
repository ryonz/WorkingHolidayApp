import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import WHApplyIndexBar from '../elements/WHApplyIndexBar';

class WHApply extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WHApplyBar />
        <WHApplyIndexBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default WHApply;
