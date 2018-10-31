import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import RadioButtons from '../elements/RadioButtons';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class FamilyInfo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      chidrenNameJa1: '',
      childrenNameEn1: '',
      birthdayOfChildren1: '',
      birthCountryOfChildren1: '',
      aboutMaridgeOfChildren1: '',
      addressOfChildren1: '',
      postalCodeOfChildren1: '',
      jobOfChildren1: '',
      comeTogetherWithChildren1: '',

      chidrenNameJa2: '',
      childrenNameEn2: '',
      birthdayOfChildren2: '',
      birthCountryOfChildren2: '',
      aboutMaridgeOfChildren2: '',
      addressOfChildren2: '',
      postalCodeOfChildren2: '',
      jobOfChildren2: '',
      comeTogetherWithChildren2: '',

      chidrenNameJa3: '',
      childrenNameEn3: '',
      birthdayOfChildren3: '',
      birthCountryOfChildren3: '',
      aboutMaridgeOfChildren3: '',
      addressOfChildren3: '',
      postalCodeOfChildren3: '',
      jobOfChildren3: '',
      comeTogetherWithChildren3: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked10').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('chidrenNameJa1').then(text => {
      if (text !== null) {
        this.setState({ chidrenNameJa1: text });
      }
    });
    AsyncStorage.getItem('childrenNameEn1').then(text => {
      if (text !== null) {
        this.setState({ childrenNameEn1: text });
      }
    });
    AsyncStorage.getItem('birthdayOfChildren1').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfChildren1: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfChildren1').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfChildren1: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfChildren1').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfChildren1: text });
      }
    });
    AsyncStorage.getItem('addressOfChildren1').then(text => {
      if (text !== null) {
        this.setState({ addressOfChildren1: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfChildren1').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfChildren1: text });
      }
    });
    AsyncStorage.getItem('jobOfChildren1').then(date => {
      if (date !== null) {
        this.setState({ jobOfChildren1: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithChildren1').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithChildren1: value });
      }
    });
    AsyncStorage.getItem('chidrenNameJa2').then(text => {
      if (text !== null) {
        this.setState({ chidrenNameJa2: text });
      }
    });
    AsyncStorage.getItem('childrenNameEn2').then(text => {
      if (text !== null) {
        this.setState({ childrenNameEn2: text });
      }
    });
    AsyncStorage.getItem('birthdayOfChildren2').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfChildren2: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfChildren2').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfChildren2: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfChildren2').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfChildren2: text });
      }
    });
    AsyncStorage.getItem('addressOfChildren2').then(text => {
      if (text !== null) {
        this.setState({ addressOfChildren2: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfChildren2').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfChildren2: text });
      }
    });
    AsyncStorage.getItem('jobOfChildren2').then(date => {
      if (date !== null) {
        this.setState({ jobOfChildren2: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithChildren2').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithChildren2: value });
      }
    });
    AsyncStorage.getItem('chidrenNameJa3').then(text => {
      if (text !== null) {
        this.setState({ chidrenNameJa3: text });
      }
    });
    AsyncStorage.getItem('childrenNameEn3').then(text => {
      if (text !== null) {
        this.setState({ childrenNameEn3: text });
      }
    });
    AsyncStorage.getItem('birthdayOfChildren3').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfChildren3: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfChildren3').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfChildren3: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfChildren3').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfChildren3: text });
      }
    });
    AsyncStorage.getItem('addressOfChildren3').then(text => {
      if (text !== null) {
        this.setState({ addressOfChildren3: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfChildren3').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfChildren3: text });
      }
    });
    AsyncStorage.getItem('jobOfChildren3').then(date => {
      if (date !== null) {
        this.setState({ jobOfChildren3: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithChildren3').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithChildren3: value });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked10', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('form10')
        .set({
          form10: [
            { chidrenNameJa1: this.state.chidrenNameJa1 },
            { childrenNameEn1: this.state.childrenNameEn1 },
            { birthdayOfChildren1: this.state.birthdayOfChildren1 },
            { birthCountryOfChildren1: this.state.birthCountryOfChildren1 },
            { aboutMaridgeOfChildren1: this.state.aboutMaridgeOfChildren1 },
            { addressOfChildren1: this.state.addressOfChildren1 },
            { postalCodeOfChildren1: this.state.postalCodeOfChildren1 },
            { jobOfChildren1: this.state.jobOfChildren1 },
            { comeTogetherWithChildren1: this.state.comeTogetherWithChildren1 },
            { chidrenNameJa2: this.state.chidrenNameJa2 },
            { childrenNameEn2: this.state.childrenNameEn2 },
            { birthdayOfChildren2: this.state.birthdayOfChildren2 },
            { birthCountryOfChildren2: this.state.birthCountryOfChildren2 },
            { aboutMaridgeOfChildren2: this.state.aboutMaridgeOfChildren2 },
            { addressOfChildren2: this.state.addressOfChildren2 },
            { postalCodeOfChildren2: this.state.postalCodeOfChildren2 },
            { jobOfChildren2: this.state.jobOfChildren2 },
            { comeTogetherWithChildren2: this.state.comeTogetherWithChildren2 },
            { chidrenNameJa3: this.state.chidrenNameJa3 },
            { childrenNameEn3: this.state.childrenNameEn3 },
            { birthdayOfChildren3: this.state.birthdayOfChildren3 },
            { birthCountryOfChildren3: this.state.birthCountryOfChildren3 },
            { aboutMaridgeOfChildren3: this.state.aboutMaridgeOfChildren3 },
            { addressOfChildren3: this.state.addressOfChildren3 },
            { postalCodeOfChildren3: this.state.postalCodeOfChildren3 },
            { jobOfChildren3: this.state.jobOfChildren3 },
            { comeTogetherWithChildren3: this.state.comeTogetherWithChildren3 },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit10();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked10', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked10')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit10();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enable
      >
        <ScrollView style={styles.container}>
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>家族情報４</InfoHeader>
          <Notes />
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('chidrenNameJa1', text);
              this.setState({ chidrenNameJa1: text });
            }}
            value={this.state.chidrenNameJa1}
            editable={this.state.editable}
          >
            お子様の姓名（漢字表記）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('childrenNameEn1', text);
              this.setState({ childrenNameEn1: text });
            }}
            value={this.state.childrenNameEn1}
            editable={this.state.editable}
          >
            お子様姓名（英字表記/パスポート通りのローマ字で）
          </QuestionTextSet>

          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdayOfChildren1', date);
              this.setState({ birthdayOfChildren1: date });
            }}
            value={this.state.birthdayOfChildren1}
            disabled={this.state.disabled}
          >
            お子様の生年月日（西暦で）
          </QuestionTextBoxDate>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthCountryOfChildren1', text);
              this.setState({ birthCountryOfChildren1: text });
            }}
            value={this.state.birthCountryOfChildren1}
            editable={this.state.editable}
            placeholder={'例：日本'}
          >
            お子様の出生国
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('aboutMaridgeOfChildren1', text);
              this.setState({ aboutMaridgeOfChildren1: text });
            }}
            placeholder={'例：未婚、既婚、離婚、別居、死別等'}
            value={this.state.aboutMaridgeOfChildren1}
            editable={this.state.editable}
          >
            お子様の婚姻状況
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('addressOfChildren1', text);
              this.setState({ addressOfChildren1: text });
            }}
            value={this.state.addressOfChildren1}
            editable={this.state.editable}
          >
            お子様の現住所
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('postalCodeOfChildren1', text);
              this.setState({ postalCodeOfChildren1: text });
            }}
            value={this.state.postalCodeOfChildren1}
            editable={this.state.editable}
          >
            お子様の郵便番号
          </QuestionTextSet>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('jobOfChildren1', text);
              this.setState({ jobOfChildren1: text });
            }}
            value={this.state.jobOfChildren1}
            editable={this.state.editable}
            placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
          >
            お子様のご職業
          </QuestionTextSet>

          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('comeTogetherWithChildren1', value);
                this.setState({ comeTogetherWithChildren1: value });
              }}
              value={this.state.comeTogetherWithChildren1}
              disabled={this.state.disabled}
            />
          </View>
          {/* 2行目 */}
          <View style={styles.line} />

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('chidrenNameJa2', text);
              this.setState({ chidrenNameJa2: text });
            }}
            value={this.state.chidrenNameJa2}
            editable={this.state.editable}
          >
            お子様の姓名（漢字表記）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('childrenNameEn2', text);
              this.setState({ childrenNameEn2: text });
            }}
            value={this.state.childrenNameEn2}
            editable={this.state.editable}
          >
            お子様姓名（英字表記/パスポート通りのローマ字で）
          </QuestionTextSet>

          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdayOfChildren2', date);
              this.setState({ birthdayOfChildren2: date });
            }}
            value={this.state.birthdayOfChildren2}
            disabled={this.state.disabled}
          >
            お子様の生年月日（西暦で）
          </QuestionTextBoxDate>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthCountryOfChildren2', text);
              this.setState({ birthCountryOfChildren2: text });
            }}
            value={this.state.birthCountryOfChildren2}
            editable={this.state.editable}
            placeholder={'例：日本'}
          >
            お子様の出生国
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('aboutMaridgeOfChildren2', text);
              this.setState({ aboutMaridgeOfChildren2: text });
            }}
            placeholder={'例：未婚、既婚、離婚、別居、死別等'}
            value={this.state.aboutMaridgeOfChildren2}
            editable={this.state.editable}
          >
            お子様の婚姻状況
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('addressOfChildren2', text);
              this.setState({ addressOfChildren2: text });
            }}
            value={this.state.addressOfChildren2}
            editable={this.state.editable}
          >
            お子様の現住所
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('postalCodeOfChildren2', text);
              this.setState({ postalCodeOfChildren2: text });
            }}
            value={this.state.postalCodeOfChildren2}
            editable={this.state.editable}
          >
            お子様の郵便番号
          </QuestionTextSet>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('jobOfChildren2', text);
              this.setState({ jobOfChildren2: text });
            }}
            value={this.state.jobOfChildren2}
            editable={this.state.editable}
            placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
          >
            お子様のご職業
          </QuestionTextSet>

          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('comeTogetherWithChildren2', value);
                this.setState({ comeTogetherWithChildren2: value });
              }}
              value={this.state.comeTogetherWithChildren2}
              disabled={this.state.disabled}
            />
          </View>

          {/* 3行目 */}
          <View style={styles.line} />

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('chidrenNameJa3', text);
              this.setState({ chidrenNameJa3: text });
            }}
            value={this.state.chidrenNameJa3}
            editable={this.state.editable}
          >
            お子様の姓名（漢字表記）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('childrenNameEn3', text);
              this.setState({ childrenNameEn3: text });
            }}
            value={this.state.childrenNameEn3}
            editable={this.state.editable}
          >
            お子様姓名（英字表記/パスポート通りのローマ字で）
          </QuestionTextSet>

          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdayOfChildren3', date);
              this.setState({ birthdayOfChildren3: date });
            }}
            value={this.state.birthdayOfChildren3}
            disabled={this.state.disabled}
          >
            お子様の生年月日（西暦で）
          </QuestionTextBoxDate>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthCountryOfChildren3', text);
              this.setState({ birthCountryOfChildren3: text });
            }}
            value={this.state.birthCountryOfChildren3}
            editable={this.state.editable}
            placeholder={'例：日本'}
          >
            お子様の出生国
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('aboutMaridgeOfChildren3', text);
              this.setState({ aboutMaridgeOfChildren3: text });
            }}
            placeholder={'例：未婚、既婚、離婚、別居、死別等'}
            value={this.state.aboutMaridgeOfChildren3}
            editable={this.state.editable}
          >
            お子様の婚姻状況
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('addressOfChildren3', text);
              this.setState({ addressOfChildren3: text });
            }}
            value={this.state.addressOfChildren3}
            editable={this.state.editable}
          >
            お子様の現住所
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('postalCodeOfChildren3', text);
              this.setState({ postalCodeOfChildren3: text });
            }}
            value={this.state.postalCodeOfChildren3}
            editable={this.state.editable}
          >
            お子様の郵便番号
          </QuestionTextSet>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('jobOfChildren3', text);
              this.setState({ jobOfChildren3: text });
            }}
            value={this.state.jobOfChildren3}
            editable={this.state.editable}
            placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
          >
            お子様のご職業
          </QuestionTextSet>

          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('comeTogetherWithChildren3', value);
                this.setState({ comeTogetherWithChildren3: value });
              }}
              value={this.state.comeTogetherWithChildren3}
              disabled={this.state.disabled}
            />
          </View>

          <CheckBox
            disabled={this.state.disableChecked}
            center
            title={'保存/修正'}
            checked={this.state.checked}
            onPress={() => {
              this.onPressCheckBox();
            }}
          />

          <Copyrights />
        </ScrollView>
      </KeyboardAvoidingView>
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
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
  },
  line: {
    width: '100%',
    backgroundColor: '#000000',
    height: 0.5,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FamilyInfo4;
