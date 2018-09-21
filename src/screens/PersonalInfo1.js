import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo1 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader />
        <Notes />

        <QuestionTextSet>姓名（漢字表記）</QuestionTextSet>
        <QuestionTextSet>本名以外に旧姓・通称名(通名)・別名など他の名前があればローマ字で記入</QuestionTextSet>
        <QuestionTextSet label={"例：結婚・離婚/ご両親の離婚のためなど"}>別名がある方はその理由</QuestionTextSet>
        <QuestionTextSet>出生地（都道府県と市名）</QuestionTextSet>
        <QuestionTextSet>国籍</QuestionTextSet>
        <QuestionTextSet>婚姻の形態</QuestionTextSet>
        <QuestionTextSet>婚姻期間（上記で既婚・離婚と答えた方</QuestionTextSet>
        <QuestionTextSet>配偶者の氏名（上記で既婚・離婚と答えた方）{'\n'}パスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextSet>配偶者の生年月日（西暦で）</QuestionTextSet>
        <QuestionTextSet>上記で回答した婚姻期間以外に、過去に婚姻歴の）{'\n'}ある方はその婚姻期間</QuestionTextSet>
        <QuestionTextSet>上記で過去の婚姻歴があると回答した方は、その{'\n'}配偶者の氏名をパスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextSet>上記の配偶者の生年月日（西暦で）</QuestionTextSet>

        <SubmitButton style={styles.saveButton} >保存</SubmitButton>

        <Copyrights />

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#fff',
  },

});

export default PersonalInfo1;
