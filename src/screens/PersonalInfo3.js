import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import CheckBoxes from '../elements/CheckBoxes';

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
            過去にカナダのビザ（ワーキングホリデー・学生・観{'\n'}
            光）の申請をしたことがありますか？（はい/いいえ）{'\n'}
            {'\n'}
            ＊パスポートにスタンプのみ押され、紙のビザを発行さ{'\n'}
            れなかった方はビザを申請したことにはなりません。{'\n'}
            「いいえ」でご回答ください。{'\n'}
          </Text>

          <CheckBoxes />
        </View>




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
});

export default PersonalInfo3;
