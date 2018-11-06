import React from 'react';
import { WebView, View, StyleSheet } from 'react-native';

import InfoHeader from '../components/InfoHeader';

class AboutJpcanada extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InfoHeader onPress={() => { this.props.navigation.goBack(); }}>JPCANADAについて</InfoHeader>
        <WebView
          source={{ uri: 'https://agent.jpcanada.com/points/' }}
          style={styles.webview}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  webview: {
    width: '100%',
    height: 'auto',
    marginTop:10,
  },
});

export default AboutJpcanada;
