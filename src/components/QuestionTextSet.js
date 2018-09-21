import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BasicInputTextBox from './BasicInputTextBox';

class QuestionTextSet extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            {this.props.children}
          </Text>
        </View>
        <BasicInputTextBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
  },
});

export default QuestionTextSet;
