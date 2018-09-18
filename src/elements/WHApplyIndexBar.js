import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WHApplyIndexBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerIndexBar}>
          <Text style={styles.indexTitle}>目次</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  headerIndexBar: {
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 22,
  },
  indexTitle: {
    fontSize: 14,

  },

});

export default WHApplyIndexBar;
