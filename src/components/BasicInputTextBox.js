import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

class BasicInputTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text : '' }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputBox}>

          <AutoGrowingTextInput
            style={styles.textInput}
            placeholder={this.state.text}
          />

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 18,
  },
  textInputBox: {
    width: '83%',
    height: 30,
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#707070',
  },
  textInput: {
    fontSize: 13,
    color: '#B5B5B5',
    paddingTop: 6,
    left: 18,
  },
});

export default BasicInputTextBox;
