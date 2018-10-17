import React from 'react';
import { StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import firebase from 'firebase';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';

import RadioButtons from '../elements/RadioButtons';

import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCountry: '',
      statusOfcurrentCountry: '',
      fromDurationOfVisa: '',
      toDurationOfVisa: '',
      otherCountry: '',
      nameOfotherCountry: '',
      statusOfOtherCountry: '',
      fromDurationOfOtherCountry: '',
      toDurationOfOtherCountry: '',
      whereApplyFrom: '',
      whichCountryApplyFrom: '',
      statusOfCountryToApply: '',
      fromDurationOfCountryToApply: '',
      toDurationOfCountryToApply: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('currentCountry')
      .then((text) => {
        if (text !== null) {
          this.setState({ currentCountry: text });
        }
      });

    AsyncStorage.getItem('statusOfcurrentCountry')
      .then((text) => {
        if (text !== null) {
          this.setState({ statusOfcurrentCountry: text });
        }
      });

    AsyncStorage.getItem('fromDurationOfVisa')
      .then((date) => {
        if (date !== null) {
          this.setState({ fromDurationOfVisa: date });
        }
      });

    AsyncStorage.getItem('toDurationOfVisa')
      .then((date) => {
        if (date !== null) {
          this.setState({ toDurationOfVisa: date });
        }
      });

    AsyncStorage.getItem('otherCountry')
      .then((text) => {
        if (text !== null) {
          this.setState({ otherCountry: text });
        }
      });

    AsyncStorage.getItem('nameOfotherCountry')
      .then((text) => {
        if (text !== null) {
          this.setState({ nameOfotherCountry: text });
        }
      });

    AsyncStorage.getItem('statusOfOtherCountry')
      .then((text) => {
        if (text !== null) {
          this.setState({ statusOfOtherCountry: text });
        }
      });

    AsyncStorage.getItem('fromDurationOfOtherCountry')
      .then((date) => {
        if (date !== null) {
          this.setState({ fromDurationOfOtherCountry: date });
        }
      });

    AsyncStorage.getItem('toDurationOfOtherCountry')
      .then((date) => {
        if (date !== null) {
          this.setState({ toDurationOfOtherCountry: date });
        }
      });

    AsyncStorage.getItem('whereApplyFrom')
      .then((text) => {
        if (text !== null) {
          this.setState({ whereApplyFrom: text });
        }
      });

    AsyncStorage.getItem('whichCountryApplyFrom')
      .then((text) => {
        if (text !== null) {
          this.setState({ whichCountryApplyFrom: text });
        }
      });

    AsyncStorage.getItem('statusOfCountryToApply')
      .then((text) => {
        if (text !== null) {
          this.setState({ statusOfCountryToApply: text });
        }
      });

    AsyncStorage.getItem('fromDurationOfCountryToApply')
      .then((date) => {
        if (date !== null) {
          this.setState({ fromDurationOfCountryToApply: date });
        }
      });

    AsyncStorage.getItem('toDurationOfCountryToApply')
      .then((date) => {
        if (date !== null) {
          this.setState({ toDurationOfCountryToApply: date });
        }
      });
  }

  handleOnPress() {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection(`users/${user.uid}/forms`).doc('form4')
      .set({
        form4: [
          { currentCountry: this.state.currentCountry },
          { statusOfcurrentCountry: this.state.statusOfcurrentCountry },
          { fromDurationOfVisa: this.state.fromDurationOfVisa },
          { toDurationOfVisa: this.state.toDurationOfVisa },
          { otherCountry: this.state.otherCountry },
          { nameOfotherCountry: this.state.nameOfotherCountry },
          { statusOfOtherCountry: this.state.statusOfOtherCountry },
          { fromDurationOfOtherCountry: this.state.fromDurationOfOtherCountry },
          { toDurationOfOtherCountry: this.state.toDurationOfOtherCountry },
          { whereApplyFrom: this.state.whereApplyFrom },
          { whichCountryApplyFrom: this.state.whichCountryApplyFrom },
          { statusOfCountryToApply: this.state.statusOfCountryToApply },
          { fromDurationOfCountryToApply: this.state.fromDurationOfCountryToApply },
          { toDurationOfCountryToApply: this.state.toDurationOfCountryToApply },

        ],
      });
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報４</InfoHeader>
        <Notes />

        <QuestionTextSet
          placeholder={'例：日本、カナダなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('currentCountry', text);
            this.setState({ currentCountry: text });
          }}
          value={this.state.currentCountry}
        >
          現在住んでいる国
        </QuestionTextSet>
        <QuestionTextSet
          placeholder={'例：国籍を持っている。○○ビザで滞在中など'}
          onChangeText={(text) => {
            AsyncStorage.setItem('statusOfcurrentCountry', text);
            this.setState({ statusOfcurrentCountry: text });
          }}
          value={this.state.statusOfcurrentCountry}
        >
          その国でのステイタス
        </QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('fromDurationOfVisa', date);
              this.setState({ fromDurationOfVisa: date });
            }}
            value={this.state.fromDurationOfVisa}
          >
            *上記で「ビザで滞在中」と回答された方。
            {'\n'}滞在期間をご回答ください。
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('toDurationOfVisa', date);
              this.setState({ toDurationOfVisa: date });
            }}
            value={this.state.toDurationOfVisa}
          >
            から
          </QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
          過去５年間に、国籍を持つ国以外に６ヶ月以上住んでいたことがありますか（はい/いいえ）
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('otherCountry', value);
              this.setState({ otherCountry: value });
            }}
            value={this.state.otherCountry}
          />
        </View>
        <QuestionTextSet
          placeholder={'例：カナダ、アメリカなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('nameOfotherCountry', text);
            this.setState({ nameOfotherCountry: text });
          }}
          value={this.state.nameOfotherCountry}
        >
          *「はい」と回答された方。その国名をご回答ください。
        </QuestionTextSet>
        <QuestionTextSet
          placeholder={'例：学生ビザなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('statusOfOtherCountry', text);
            this.setState({ statusOfOtherCountry: text });
          }}
          value={this.state.statusOfOtherCountry}
        >
          *「はい」と回答された方。その国でのステイタスをご回答ください。
        </QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('fromDurationOfOtherCountry', date);
              this.setState({ fromDurationOfOtherCountry: date });
            }}
            value={this.state.fromDurationOfOtherCountry}
          >
            *「はい」と回答された方。滞在期間をご回答ください。
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('toDurationOfOtherCountry', date);
              this.setState({ toDurationOfOtherCountry: date });
            }}
            value={this.state.toDurationOfOtherCountry}
          >
            から
          </QuestionTextBoxDate>
        </View>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            現在住んでいる国から申請をしますか？（はい/いいえ）
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('whereApplyFrom', value);
              this.setState({ whereApplyFrom: value });
            }}
            value={this.state.whereApplyFrom}
          />
        </View>
        <QuestionTextSet
          placeholder={'例：カナダ、アメリカなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('whichCountryApplyFrom', text);
            this.setState({ whichCountryApplyFrom: text });
          }}
          value={this.state.whichCountryApplyFrom}
        >
            *「いいえ」と回答された方。どの国から申請をするのかをご回答ください。
        </QuestionTextSet>
        <QuestionTextSet
          placeholder={'例：学生ビザなど'}
          onChangeText={(text) => {
            AsyncStorage.setItem('statusOfCountryToApply', text);
            this.setState({ statusOfCountryToApply: text });
          }}
          value={this.state.statusOfCountryToApply}
        >
            *「いいえ」と回答された方。その国でのステイタスをご回答ください。
        </QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('fromDurationOfCountryToApply', date);
              this.setState({ fromDurationOfCountryToApply: date });
            }}
            value={this.state.fromDurationOfCountryToApply}
          >
            *「いいえ」と回答された方。その国での滞在期間をご回答ください。
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('toDurationOfCountryToApply', date);
              this.setState({ toDurationOfCountryToApply: date });
            }}
            value={this.state.toDurationOfCountryToApply}

          >
            から
          </QuestionTextBoxDate>
        </View>

        <SubmitButton
          style={styles.saveButton}
          onPress={this.handleOnPress.bind(this)}
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

export default PersonalInfo4;
