import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SubmitButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.button}>
          <Text style={styles.buttonText}>送信</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 18,
  },
  button: {
    alignItems: 'center',
    width: 179,
    height: 46,
    paddingTop: 12,
    backgroundColor: '#F0F0F0',
    borderRadius: 23,
    borderColor: '#707070',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 0.06,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '900',

  },

});

export default SubmitButton;

/*
position: 'absolute',
bottom: 50,
right: 98,
*/