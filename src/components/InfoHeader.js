
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

class InfoHeader extends React.Component {
  render() {
    const { style } = this.props;

    return (
      <View style={styles.container}>
        <Text
          style={[styles.headerTitle, style]}
        >
          {this.props.children}
        </Text>

        <TouchableHighlight
          style={styles.backbutton}
          onPress={() => { this.props.onPress(); }}
          underlayColor="#F0F0F0"
        >
          <Image
            style={styles.backbuttonImage}
            source={require('../../assets/images/left-arrow.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 105,
    alignItems: 'center',
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#626262',
    paddingTop: 60,
  },
  backbutton: {
    position: 'absolute',
    top: 58,
    left: 19,
    width: 40,
    height: 40,
  },
  backbuttonImage: {
    width: 20,
    height: 20,
  },
});

export default InfoHeader;
