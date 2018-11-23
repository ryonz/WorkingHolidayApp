import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

// import BasicInputTextBox from './BasicInputTextBox';

class QuestionTextSet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            {this.props.children}
          </Text>
        </View>

        <View style={styles.textInputBox}>

          <TextInput
            style={styles.textInput}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            editable={this.props.editable}
            underlineColorAndroid={'transparent'}
            onChange={this.props.onChange}
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
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '95%',
    fontSize: 13,
  },
  textInputBox: {
    width: '95%',
    height: 30,
    marginTop: 5,
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#707070',
  },
  textInput: {
    width: '95%',
    fontSize: 13,
    color: '#000000',
    paddingTop: 6,
    left: 18,
  },
});

export default QuestionTextSet;
