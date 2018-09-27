//後々、WHApplyListの各リスト名からタイトルを取得する。

import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

class InfoHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>{this.props.children}</Text>

        <TouchableHighlight style={styles.backbutton} onPress={() => { this.props.navigation.goBack(); }} underlayColor="#F0F0F0">
          <Image style={styles.backbuttonImage} source={require('../../assets/images/left-arrow.png')} />
        </TouchableHighlight>
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
  backbutton: {
    position: 'absolute',
    top: 25,
    left: 18,
    width: 20,
    height: 20,
  },
  backbuttonImage: {
    width: 20,
    height: 20,
  },
});

export default InfoHeader;
