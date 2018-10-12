import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import RadioButtons from '../elements/RadioButtons';

import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo5 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報5</InfoHeader>
        <Notes />

        <QuestionTextSet placeholder={'例：日本'}>現在の国籍</QuestionTextSet>
        <QuestionTextSet>家族友達と話すときに使う言葉{'\n'}(英語/フランス語/どちらも使わない)</QuestionTextSet>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
          現在学生ですか？（はい/いいえ）
          </Text>
          <RadioButtons />
        </View>
        <Text style={{ alignSelf: 'center', width: '83%' }}>*学生であれば以下の質問にお答えください。</Text>
        <View style={styles.line} />
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>入学年月日</QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>卒業予定年月日</QuestionTextBoxDate>
        </View>
        <QuestionTextSet>学部・専攻名</QuestionTextSet>
        <QuestionTextSet>学校名</QuestionTextSet>
        <QuestionTextSet>学校所在地の市区町村名</QuestionTextSet>
        <QuestionTextSet>学校所在地の都道府県名</QuestionTextSet>
        <Text style={{ alignSelf: 'center', width: '83%' }}>*最終学歴について{'\n'}(現在学生の方は一つ前の学校になります)</Text>
        <View style={styles.line} />
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>入学年月日</QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>卒業予定年月日</QuestionTextBoxDate>
        </View>
        <QuestionTextSet>学部・専攻名</QuestionTextSet>
        <QuestionTextSet>学校名</QuestionTextSet>
        <QuestionTextSet>学校所在地の市区町村名</QuestionTextSet>
        <QuestionTextSet>学校所在地の都道府県名</QuestionTextSet>

        <View style={styles.line} />
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
          現在働いていますか？（はい/いいえ）
          </Text>
          <RadioButtons />
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
  line: {
    width: '100%',
    backgroundColor: '#000000',
    height: 0.5,
    marginTop: 18,
    marginBottom: 10,
  },
});

export default PersonalInfo5;
