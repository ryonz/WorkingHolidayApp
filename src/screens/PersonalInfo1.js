import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo1 extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation} />
        <Notes />

        <QuestionTextSet placeholder={'例：留学太郎'}>姓名（漢字表記）</QuestionTextSet>
        <QuestionTextSet>本名以外に旧姓・通称名(通名)・別名など他の名前があればローマ字で記入</QuestionTextSet>
        <QuestionTextSet placeholder={'例：結婚・離婚/ご両親の離婚のためなど'}>別名がある方はその理由</QuestionTextSet>
        <QuestionTextSet placeholder={'例：兵庫県 神戸市'}>出生地（都道府県と市名）</QuestionTextSet>
        <QuestionTextSet placeholder={'例：日本'}>出生地（国名）</QuestionTextSet>
        <QuestionTextSet placeholder={'例：日本'}>国籍</QuestionTextSet>
        <QuestionTextSet placeholder={'例：未婚、既婚、離婚、別居、死別等'}>婚姻の形態</QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate>婚姻期間（上記で既婚・離婚と答えた方)</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>
        <QuestionTextSet placeholder={'例：Michiko Ryugaku'}>配偶者の氏名（上記で既婚・離婚と答えた方）{'\n'}パスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextBoxDate>配偶者の生年月日（西暦で）</QuestionTextBoxDate>
        <View style={styles.questionTextBoxDateMargin2Line}>
          <QuestionTextBoxDate>上記で回答した婚姻期間以外に、過去に婚姻歴の）{'\n'}ある方はその婚姻期間</QuestionTextBoxDate>
          <QuestionTextBoxDate>から</QuestionTextBoxDate>
        </View>
        <QuestionTextSet placeholder={'例：Hanako Ryuzaki'}>上記で過去の婚姻歴があると回答した方は、その{'\n'}配偶者の氏名をパスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextBoxDate>上記の配偶者の生年月日（西暦で）</QuestionTextBoxDate>

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
  questionTextBoxDateMargin: {
    marginTop: 10,
    marginBottom: 20,
  },
  questionTextBoxDateMargin2Line: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PersonalInfo1;
