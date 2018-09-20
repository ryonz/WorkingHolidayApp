import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//状態を持たせる必要がないので、Functional Componentに設定
const WHApplyIndexBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerIndexBar}>
        <Text style={styles.indexTitle}>目次</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerIndexBar: {
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 22,
  },
  indexTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#fff',
  },

});

export default WHApplyIndexBar;




/*
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



*/
