import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/splash-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.versionText}>β版</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo:{
    width: '67.7%',
    maxWidth: 254,
    minHeight: 67,
    marginBottom: 25,
  },
  versionText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#626262',
  },

});

export default SplashScreen;
