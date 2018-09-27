import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo6 extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報６</InfoHeader>
        <View style={styles.notes}>
          <Text style={styles.notesText}>
                学校卒業から現在までの職歴について、履歴書を完{'\n'}
                成させてください。＊卒業から10年以上たっている{'\n'}
                人は、過去10年分について記載してください。{'\n'}
                ＊空白の期間がないように記入してください。{'\n'}
                ＊具体的に内容を説明してください。{'\n'}
            {'\n'}
                ＊空白の期間がないように記入してください。{'\n'}
                &emsp;各職歴の間に空白の期間がある場合は、その間何{'\n'}
                &emsp;をしていたかを項目ごとに期間を示し、具体的に{'\n'}
                &emsp;内容を一番説明下の「内容」の項目に記入してく{'\n'}
                &emsp;ださい。{'\n'}
                &emsp;「開始日」と「内容」の項目は必須項目です。{'\n'}
                &emsp;（例：○○の資格勉強、留学準備、就職活動、{'\n'}
                &emsp;○○学校で○○コース受講、アメリカへ語学{'\n'}
                &emsp;留学など）{'\n'}
                ＊学生時代のアルバイトは含めません。{'\n'}
                ＊卒業後は雇用形態（正社員・アルバイトなど）{'\n'}
                &emsp;に関係なくご回答ください。{'\n'}
          </Text>
        </View>

        <View style={styles.questionSetBox}>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate>開始日(入社日)*</QuestionTextBoxDate>
            <QuestionTextBoxDate>終了日(退社日)*</QuestionTextBoxDate>
          </View>

          <QuestionTextSet placeholder={'例：株式会社加奈陀(かぶしきがいしゃ かなだ)'}>会社名(ふりがな)</QuestionTextSet>

          <QuestionTextSet placeholder={'例：東京都千代田区'}>所在地</QuestionTextSet>

          <QuestionTextSet placeholder={'例：留学カウンセラー'}>職業</QuestionTextSet>
          <QuestionTextSet placeholder={'例：係長'}>役職(ポジション)</QuestionTextSet>
          <QuestionTextSet placeholder={'例：願書作成、請求書発行、書類送付'}>主な(仕事)内容*</QuestionTextSet>
        </View>



        <View>
          <TouchableOpacity >
            <Text>追加</Text>
          </TouchableOpacity>
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
  questionSetBox: {
    width: '100%',
  },
  notes:{
    width: '100%',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  notesText:{
    color: '#FF0000',
    width: '83%',
  },
  saveButton: {
    backgroundColor: '#fff',
  },
  questionTextBoxDateMargin: {
    marginTop: 10,
    marginBottom: 20,
  },
  questionTextBoxDateMargin2Line: {
    marginTop: 20,
    marginBottom: 20,
  },
})

export default PersonalInfo6;
