import React from 'react';
import { WebView, View, StyleSheet } from 'react-native';

import InfoHeader from '../components/InfoHeader';

class AboutWorkingHoliday extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InfoHeader onPress={() => { this.props.navigation.goBack(); }}>ワーホリ申請について</InfoHeader>
        <WebView
          source={{ uri: 'http://canadaworkingholiday.or.jp' }}
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
  },
});

export default AboutWorkingHoliday;
