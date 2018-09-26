import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Copyrights from '../elements/Copyrights';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/splash-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.versionText}>β版</Text>
        <Copyrights style={styles.copyrights}/>
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
  copyrights: {
    bottom: 0,
    width: '100%',
  },
});

export default SplashScreen;
