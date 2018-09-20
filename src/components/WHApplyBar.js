import React from 'react';
import {
  StyleSheet, Text, View, Image, Platform,
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
    width: '100%',
    zIndex: 10,
  },
  headerHWApply: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 96,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#626262',
  },
  headerImage: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 40,
    right: 18,
  },
});

export default WHApplyBar;
