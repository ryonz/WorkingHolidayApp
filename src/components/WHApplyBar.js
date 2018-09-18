import React from 'react';
import {
  StyleSheet, Text, View, Image,
}
  from 'react-native';

class WHApplyBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>ワーキングホリデー申請</Text>
        </View>

        <Image
          style={styles.headerImage}
          source={require('../../assets/images/headerLogo.png')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerHWApply: {
    position: 'absolute',
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
  },
  headerText: {
    fontSize: 20,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  headerImage: {
    position: 'absolute',
    alignItems: 'center',
    width: 48,
    height: 48,
    top: 40,
    right: 18,
  },
});

export default WHApplyBar;
