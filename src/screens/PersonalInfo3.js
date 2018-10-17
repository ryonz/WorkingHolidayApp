import React from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import RadioButtons from '../elements/RadioButtons';

import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutVisa: '',
      fromDateOfStaying: '',
      toDateOfStaying: '',
      kindOfVisa: '',
      fromDateOfStayingCanada: '',
      toDateOfStayingCanada: '',
      placeOfstaying: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('aboutVisa')
      .then((value) => {
        if (value !== null) {
          this.setState({ aboutVisa: value });
        }
      });

    AsyncStorage.getItem('fromDateOfStaying')
      .then((text) => {
        if (text !== null) {
          this.setState({ fromDateOfStaying: text });
        }
      });

    AsyncStorage.getItem('toDateOfStaying')
      .then((text) => {
        if (text !== null) {
          this.setState({ toDateOfStaying: text });
        }
      });

    AsyncStorage.getItem('kindOfVisa')
      .then((date) => {
        if (date !== null) {
          this.setState({ kindOfVisa: date });
        }
      });

    AsyncStorage.getItem('fromDateOfStayingCanada')
      .then((text) => {
        if (text !== null) {
          this.setState({ fromDateOfStayingCanada: text });
        }
      });

    AsyncStorage.getItem('toDateOfStayingCanada')
      .then((text) => {
        if (text !== null) {
          this.setState({ toDateOfStayingCanada: text });
        }
      });

    AsyncStorage.getItem('placeOfstaying')
      .then((text) => {
        if (text !== null) {
          this.setState({ placeOfstaying: text });
        }
      });
  }

  handleOnpress() {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection(`users/${user.uid}/forms`).doc('form3')
      .set({
        form3: [
          { aboutVisa: this.state.aboutVisa },
          { fromDateOfStaying: this.state.fromDateOfStaying },
          { toDateOfStaying: this.state.toDateOfStaying },
          { kindOfVisa: this.state.kindOfVisa },
          { fromDateOfStayingCanada: this.state.fromDateOfStayingCanada },
          { toDateOfStayingCanada: this.state.toDateOfStayingCanada },
          { placeOfstaying: this.state.placeOfstaying },
        ],
      });
    this.props.navigation.goBack();
  }

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

          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('aboutVisa', value);
              this.setState({ aboutVisa: value });
            }}
            value={this.state.aboutVisa}
          />
        </View>

        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('fromDateOfStaying', date);
              this.setState({ fromDateOfStaying: date });
            }}
            value={this.state.fromDateOfStaying}
          >
            *「はい」と回答された方。滞在期間をご回答ください。
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('toDateOfStaying', date);
              this.setState({ toDateOfStaying: date });
            }}
            value={this.state.toDateOfStaying}
          >
            から
          </QuestionTextBoxDate>
        </View>

        <QuestionTextSet
          placeholder={'例：学生ビザ、観光ビザなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('kindOfVisa', text);
            this.setState({ kindOfVisa: text });
          }}
          value={this.state.kindOfVisa}
        >
          *「はい」と回答された方。ビザの種類をご回答ください。
        </QuestionTextSet>

        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('fromDateOfStayingCanada', date);
              this.setState({ fromDateOfStayingCanada: date });
            }}
            value={this.state.fromDateOfStayingCanada}
          >
            今回のカナダ滞在予定年月
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('toDateOfStayingCanada', date);
              this.setState({ toDateOfStayingCanada: date });
            }}
            value={this.state.toDateOfStayingCanada}
          >
            から
          </QuestionTextBoxDate>
        </View>

        <QuestionTextSet
          placeholder={'例：バンクーバー,ビクトリア,トロントなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('placeOfstaying', text);
            this.setState({ placeOfstaying: text });
          }}
          value={this.state.placeOfstaying}
        >
          カナダのどの州に滞在する予定ですか
        </QuestionTextSet>

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
