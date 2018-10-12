import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import RadioButtons from '../elements/RadioButtons';

import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo4 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報4</InfoHeader>
        <Notes />

        <QuestionTextSet placeholder={'例：日本、カナダなど'}>現在住んでいる国</QuestionTextSet>
        <QuestionTextSet placeholder={'例：国籍を持っている。○○ビザで滞在中など'}>その国でのステイタス</QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>*上記で「ビザで滞在中」と回答された方。滞在期間をご回答ください。</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
          過去５年間に、国籍を持つ国以外に６ヶ月以上住んでいたことがありますか（はい/いいえ）
          </Text>
          <RadioButtons />
        </View>
        <QuestionTextSet placeholder={'例：カナダ、アメリカなど'}>*「はい」と回答された方。その国名をご回答ください。</QuestionTextSet>
        <QuestionTextSet placeholder={'例：学生ビザなど'}>*「はい」と回答された方。その国でのステイタスをご回答ください。</QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>*「はい」と回答された方。滞在期間をご回答ください。</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            現在住んでいる国から申請をしますか？（はい/いいえ）
          </Text>
          <RadioButtons />
        </View>
        <QuestionTextSet placeholder={'例：カナダ、アメリカなど'}>*「いいえ」と回答された方。どの国から申請をするのかをご回答ください。</QuestionTextSet>
        <QuestionTextSet placeholder={'例：学生ビザなど'}>*「いいえ」と回答された方。その国でのステイタスをご回答ください。</QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>*「いいえ」と回答された方。その国での滞在期間をご回答ください。</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>

        <SubmitButton style={styles.saveButton}>入力完了</SubmitButton>


        <Copyrights />

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#fff',
  },
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
  },
  questionTextBoxDateMargin: {
    marginTop: 20,
    marginBottom: 20,

  },
});

export default PersonalInfo4;
