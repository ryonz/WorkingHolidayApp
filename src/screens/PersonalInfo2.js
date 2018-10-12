import React from 'react';
import { StyleSheet, ScrollView, AsyncStorage } from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressOfCnad: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('addressOfCnad')
      .then((text) => {
        if (text !== null) {
          this.setState({ addressOfCnad: text });
        }
      });
  }

  handleOnpress() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報２</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('addressOfCnad', text);
            this.setState({ addressOfCnad: text });
          }}
          value={this.state.addressOfCnad}
        >
          現住所(カナダにいらっしゃる方はカナダのご住所で)
        </QuestionTextSet>
        <QuestionTextSet>現住所ふりがな{'\n'}(カナダのご住所をご回答頂いた方は不要です)</QuestionTextSet>
        <QuestionTextSet>現住所の郵便番号</QuestionTextSet>
        <QuestionTextBoxDate>現住所にご自身が住み始めた日</QuestionTextBoxDate>
        <QuestionTextSet>本籍は「B現住所と同じ」「C現住所と違う」</QuestionTextSet>
        <QuestionTextSet>「C現住所と違う」の場合本籍地の住所</QuestionTextSet>
        <QuestionTextSet>本籍地ふりがな</QuestionTextSet>
        <QuestionTextSet>本籍地の郵便番号</QuestionTextSet>
        <QuestionTextSet>携帯番号（もしくはご自宅）の番号</QuestionTextSet>
        <QuestionTextSet>FAX番号（もしあれば）</QuestionTextSet>

        <SubmitButton
          style={styles.saveButton}
          onPress={this.handleOnpress.bind(this)}
        >
          入力完了
        </SubmitButton>

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

export default PersonalInfo2;
