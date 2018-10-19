import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Image
                style={styles.image}
                source={require('../../assets/images/comment-white-oval-bubble.png')} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 65,
    right: 38,
    width: 68,
    height: 68,
    paddingTop: 15,
    borderRadius: 100,
    backgroundColor: '#82F873',
    shadowColor: '#000000',
    shadowOffset:{
      width: 1,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  image: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
});

export default Chat;
