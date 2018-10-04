import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import firebase from 'firebase';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo1 extends React.Component {
  state = {
    fullname: '',
    middleName: '',
    reason: '',
    birthPlaceCity: '',
    birthPlaceCountry: '',
    Citizinchip: '',
    aboutMaridge: '',
    fromTermOfMaridge: '',
    ToTermOfMaridge: '',
    nameOfSpouse:'',
    birthdateOfSpouse: '',
    fromTermOfExMaridge: '',
    ToTermOfExMaridge: '',
    nameOfExSpouse: '',
    birthdateOfExSpouse: '',

  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/form1`)
      .get()
      .then((snapShot, doc) => {
        console.log(snapShot);
        console.log(doc.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleOnpress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/form1`).add({
      form1 : [
        { fullname: this.state.fullname },
        { middleName: this.state.middleName },
        { reason: this.state.reason },
        { birthPlaceCity: this.state.birthPlaceCity },
        { birthPlaceCountry: this.state.birthPlaceCountry },
        { Citizinchip: this.state.Citizinchip },
        { aboutMaridge: this.state.aboutMaridge },
        { fromTermOfMaridge: this.state.fromTermOfMaridge },
        { ToTermOfMaridge: this.state.ToTermOfMaridge },
        { nameOfSpouse: this.state.nameOfSpouse },
        { birthdateOfSpouse: this.state.birthdateOfSpouse },
        { fromTermOfExMaridge: this.state.fromTermOfExMaridge },
        { ToTermOfExMaridge: this.state.ToTermOfExMaridge },
        { nameOfExSpouse: this.state.nameOfExSpouse },
        { birthdateOfExSpouse: this.state.birthdateOfExSpouse }]

    })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報１</InfoHeader>
        <Notes />
        <QuestionTextSet onChangeText={(text) => { this.setState({ fullname: text }); }} placeholder={'例：留学太郎'}>姓名（漢字表記）</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ middleName: text }); }}>本名以外に旧姓・通称名(通名)・別名など他の名前があればローマ字で記入</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ reason: text }); }} placeholder={'例：結婚・離婚/ご両親の離婚のためなど'}>別名がある方はその理由</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ birthPlaceCity: text }); }} placeholder={'例：兵庫県 神戸市'}>出生地（都道府県と市名）</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ birthPlaceCountry: text }); }} placeholder={'例：日本'}>出生地（国名）</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ Citizinchip: text }); }} placeholder={'例：日本'}>国籍</QuestionTextSet>
        <QuestionTextSet onChangeText={(text) => { this.setState({ aboutMaridge: text }); }} placeholder={'例：未婚、既婚、離婚、別居、死別等'}>婚姻の形態</QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate onDateChange={(date) => { this.setState({ fromTermOfMaridge: date }); }}>婚姻期間（上記で既婚・離婚と答えた方)</QuestionTextBoxDate>
          <QuestionTextBoxDate onDateChange={(date) => { this.setState({ ToTermOfMaridge: date }); }}>から</QuestionTextBoxDate>
        </View>
        <QuestionTextSet onDateChange={(date) => { this.setState({ nameOfSpouse: date }); }} placeholder={'例：Michiko Ryugaku'}>配偶者の氏名（上記で既婚・離婚と答えた方）{'\n'}パスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextBoxDate onDateChange={(date) => { this.setState({ birthdateOfSpouse: date }); }}>配偶者の生年月日（西暦で）</QuestionTextBoxDate>
        <View style={styles.questionTextBoxDateMargin2Line}>
          <QuestionTextBoxDate onDateChange={(date) => { this.setState({ fromTermOfExMaridge: date }); }}>上記で回答した婚姻期間以外に、過去に婚姻歴の）{'\n'}ある方はその婚姻期間</QuestionTextBoxDate>
          <QuestionTextBoxDate onDateChange={(date) => { this.setState({ ToTermOfExMaridge: date }); }}>から</QuestionTextBoxDate>
        </View>
        <QuestionTextSet onDateChange={(date) => { this.setState({ nameOfExSpouse: date }); }} placeholder={'例：Hanako Ryuzaki'}>上記で過去の婚姻歴があると回答した方は、その{'\n'}配偶者の氏名をパスポート表記通りローマ字で記入</QuestionTextSet>
        <QuestionTextBoxDate onDateChange={(date) => { this.setState({ birthdateOfExSpouse: date }); }}>上記の配偶者の生年月日（西暦で）</QuestionTextBoxDate>

        <SubmitButton style={styles.saveButton} onPress={this.handleOnpress.bind(this)}>保存</SubmitButton>

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
