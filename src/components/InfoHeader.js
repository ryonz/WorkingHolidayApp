//後々、WHApplyListの各リスト名からタイトルを取得する。

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class InfoHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>申請者情報①</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 58,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#626262',
    paddingTop: 22,
  },
});

export default InfoHeader;
