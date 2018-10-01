import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import RadioButtons from '../elements/RadioButtons';

import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo3 extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報３</InfoHeader>
        <Notes />

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            過去にカナダのビザ（ワーキングホリデー・学生・{'\n'}
            観光）の申請をしたことがありますか？{'\n'}
            （はい/いいえ）{'\n'}
            {'\n'}
            ＊パスポートにスタンプのみ押され、紙のビザを発{'\n'}
            行されなかった方はビザを申請したことにはなりません。
            「いいえ」でご回答ください。{'\n'}
          </Text>

          <RadioButtons />
        </View>

        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>*「はい」と回答された方。滞在期間をご回答ください。</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>

        <QuestionTextSet placeholder={'例：学生ビザ、観光ビザなど'}>*「はい」と回答された方。ビザの種類をご回答ください。</QuestionTextSet>

        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>今回のカナダ滞在予定年月</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>

        <QuestionTextSet placeholder={'例：バンクーバー,ビクトリア,トロントなど'}>カナダのどの州に滞在する予定ですか</QuestionTextSet>

        <SubmitButton style={styles.saveButton}>保存</SubmitButton>


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

export default PersonalInfo3;
