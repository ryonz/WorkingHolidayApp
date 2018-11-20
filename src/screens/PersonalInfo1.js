import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class PersonalInfo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      fullname: '',
      middleName: '',
      reason: '',
      birthPlaceCity: '',
      birthPlaceCountry: '',
      Citizinchip: '',
      aboutMaridge: '',
      fromTermOfMaridge: '',
      ToTermOfMaridge: '',
      nameOfSpouse: '',
      birthdateOfSpouse: '',
      fromTermOfExMaridge: '',
      ToTermOfExMaridge: '',
      nameOfExSpouse: '',
      birthdateOfExSpouse: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked1').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
        this.setState({ modifyNote: '修正を行う場合は、完了ボタンを再度押してください。' });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
        this.setState({ modifyNote: '' });
      }
    });
    AsyncStorage.getItem('fullname').then(text => {
      if (text !== null) {
        this.setState({ fullname: text });
      }
    });
    AsyncStorage.getItem('middleName').then(text => {
      if (text !== null) {
        this.setState({ middleName: text });
      }
    });
    AsyncStorage.getItem('reason').then(text => {
      if (text !== null) {
        this.setState({ reason: text });
      }
    });
    AsyncStorage.getItem('birthPlaceCity').then(text => {
      if (text !== null) {
        this.setState({ birthPlaceCity: text });
      }
    });
    AsyncStorage.getItem('birthPlaceCountry').then(text => {
      if (text !== null) {
        this.setState({ birthPlaceCountry: text });
      }
    });
    AsyncStorage.getItem('Citizinchip').then(text => {
      if (text !== null) {
        this.setState({ Citizinchip: text });
      }
    });
    AsyncStorage.getItem('aboutMaridge').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridge: text });
      }
    });
    AsyncStorage.getItem('fromTermOfMaridge').then(date => {
      if (date !== null) {
        this.setState({ fromTermOfMaridge: date });
      }
    });
    AsyncStorage.getItem('ToTermOfMaridge').then(date => {
      if (date !== null) {
        this.setState({ ToTermOfMaridge: date });
      }
    });
    AsyncStorage.getItem('nameOfSpouse').then(text => {
      if (text !== null) {
        this.setState({ nameOfSpouse: text });
      }
    });
    AsyncStorage.getItem('birthdateOfSpouse').then(date => {
      if (date !== null) {
        this.setState({ birthdateOfSpouse: date });
      }
    });
    AsyncStorage.getItem('fromTermOfExMaridge').then(date => {
      if (date !== null) {
        this.setState({ fromTermOfExMaridge: date });
      }
    });
    AsyncStorage.getItem('ToTermOfExMaridge').then(date => {
      if (date !== null) {
        this.setState({ ToTermOfExMaridge: date });
      }
    });
    AsyncStorage.getItem('nameOfExSpouse').then(text => {
      if (text !== null) {
        this.setState({ nameOfExSpouse: text });
      }
    });
    AsyncStorage.getItem('birthdateOfExSpouse').then(date => {
      if (date !== null) {
        this.setState({ birthdateOfExSpouse: date });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked1', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('申請者情報①')
        .set({
          '申請者情報① ': [
            { '姓名(漢字表記)': this.state.fullname },
            { '本名以外に旧姓・通称名（通名）・別名など他の名前があればローマ字で': this.state.middleName },
            { '別名がある方はその理由（例：結婚、離婚、ご両親の離婚のためなど）': this.state.reason },
            { '出生地（都道府県名と市名）': this.state.birthPlaceCity },
            { '出生地（国名）': this.state.birthPlaceCountry },
            { '国籍 ': this.state.Citizinchip },
            { '婚姻の形態（例：未婚、既婚、離婚、別居、死別等）': this.state.aboutMaridge },
            { '（上記で既婚/離婚と答えた方）婚姻期間（西暦で年月日〜）': this.state.fromTermOfMaridge },
            { '（上記で既婚/離婚と答えた方）婚姻期間（〜年月日）': this.state.ToTermOfMaridge },
            { '（上記で既婚/離婚と答えた方）配偶者の氏名（パスポート表記通り、ローマ字で）': this.state.nameOfSpouse },
            { '配偶者の生年月日（西暦で）': this.state.birthdateOfSpouse },
            { '上記で回答した婚姻期間以外に、過去に婚姻歴のある方はその婚姻期間（西暦で年月日〜）': this.state.fromTermOfExMaridge },
            { '上記で回答した婚姻期間以外に、過去に婚姻歴のある方はその婚姻期間（〜年月日）': this.state.ToTermOfExMaridge },
            { '上記で過去の婚姻歴があると回答した方は、配偶者の氏名（パスポート表記通り、ローマ字）': this.state.nameOfExSpouse },
            { '配偶者の生年月日（西暦で）': this.state.birthdateOfExSpouse },
          ],
        })
        .then(() => {
          const name = this.state.fullname;
          if (name) {
            const UserName = this.state.fullname;
            db.collection(`users/${currentUser.uid}/${UserName}`)
              .doc('氏名')
              .set({
                '氏名 ':
                  { '姓名(漢字表記)': this.state.fullname },
              }).then(() => {
                this.props.navigation.state.params.setStateEdit1();
                this.props.navigation.navigate('WHApply');
                this.setState({ disableChecked: false });
              })
          } else {
            this.props.navigation.state.params.setStateEdit1();
            this.props.navigation.navigate('WHApply');
            this.setState({ disableChecked: false });
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked1', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked1')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit1();
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
        <ScrollView>
          <InfoHeader
            onPress={this.onPressBackButton.bind(this)}
          >
            申請者情報１
          </InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('fullname', text);
              this.setState({ fullname: text });
            }}
            placeholder={'例：留学太郎'}
            value={this.state.fullname}
            editable={this.state.editable}
          >
            姓名（漢字表記）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('middleName', text);
              this.setState({ middleName: text });
            }}
            value={this.state.middleName}
            editable={this.state.editable}
          >
            本名以外に旧姓・通称名(通名)・別名など他の名前があればローマ字で記入
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('reason', text);
              this.setState({ reason: text });
            }}
            value={this.state.reason}
            editable={this.state.editable}
            placeholder={'例：結婚・離婚/ご両親の離婚のためなど'}
          >
            別名がある方はその理由
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthPlaceCity', text);
              this.setState({ birthPlaceCity: text });
            }}
            value={this.state.birthPlaceCity}
            editable={this.state.editable}
            placeholder={'例：兵庫県 神戸市'}
          >
            出生地（都道府県と市名）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthPlaceCountry', text);
              this.setState({ birthPlaceCountry: text });
            }}
            placeholder={'例：日本'}
            value={this.state.birthPlaceCountry}
            editable={this.state.editable}
          >
            出生地（国名）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('Citizinchip', text);
              this.setState({ Citizinchip: text });
            }}
            value={this.state.Citizinchip}
            editable={this.state.editable}
            placeholder={'例：日本'}
          >
            国籍
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('aboutMaridge', text);
              this.setState({ aboutMaridge: text });
              this.handleDisable(text);
            }}
            placeholder={'例：未婚、既婚、離婚、別居、死別等'}
            value={this.state.aboutMaridge}
            editable={this.state.editable}
          >
            婚姻の形態
          </QuestionTextSet>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromTermOfMaridge', date);
                this.setState({ fromTermOfMaridge: date });
              }}
              value={this.state.fromTermOfMaridge}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('fromTermOfMaridge', '');
                this.setState({ fromTermOfMaridge: '' });
              }}
            >
              婚姻期間（上記で既婚・離婚と答えた方)
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('ToTermOfMaridge', date);
                this.setState({ ToTermOfMaridge: date });
              }}
              value={this.state.ToTermOfMaridge}
              disabled={this.state.disabled}
              onPress={() => {
                this.setState({ ToTermOfMaridge: '' });
                AsyncStorage.setItem('ToTermOfMaridge', '');
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameOfSpouse', text);
              this.setState({ nameOfSpouse: text });
            }}
            value={this.state.nameOfSpouse}
            placeholder={'例：Michiko Ryugaku'}
            editable={this.state.editable}
          >
            配偶者の氏名（上記で既婚・離婚と答えた方）{'\n'}パスポート表記通りローマ字で記入
          </QuestionTextSet>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdateOfSpouse', date);
              this.setState({ birthdateOfSpouse: date });
            }}
            value={this.state.birthdateOfSpouse}
            disabled={this.state.disabled}
            onPress={() => {
              this.setState({ birthdateOfSpouse: '' });
              AsyncStorage.setItem('birthdateOfSpouse', '');
            }}
          >
            配偶者の生年月日（西暦で）
          </QuestionTextBoxDate>
          <View style={styles.questionTextBoxDateMargin2Line}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromTermOfExMaridge', date);
                this.setState({ fromTermOfExMaridge: date });
              }}
              value={this.state.fromTermOfExMaridge}
              disabled={this.state.disabled}
              onPress={() => {
                this.setState({ fromTermOfExMaridge: '' });
                AsyncStorage.setItem('fromTermOfExMaridge', '');
              }}
            >
              上記で回答した婚姻期間以外に、過去に婚姻歴の）{'\n'}ある方はその婚姻期間
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('ToTermOfExMaridge', date);
                this.setState({ ToTermOfExMaridge: date });
              }}
              value={this.state.ToTermOfExMaridge}
              disabled={this.state.disabled}
              onPress={() => {
                this.setState({ ToTermOfExMaridge: '' });
                AsyncStorage.setItem('ToTermOfExMaridge', '');
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameOfExSpouse', text);
              this.setState({ nameOfExSpouse: text });
            }}
            value={this.state.nameOfExSpouse}
            placeholder={'例：Hanako Ryuzaki'}
            editable={this.state.editable}
          >
            上記で過去の婚姻歴があると回答した方は、その{'\n'}配偶者の氏名をパスポート表記通りローマ字で記入
          </QuestionTextSet>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdateOfExSpouse', date);
              this.setState({ birthdateOfExSpouse: date });
            }}
            value={this.state.birthdateOfExSpouse}
            disabled={this.state.disabled}
            onPress={() => {
              this.setState({ birthdateOfExSpouse: '' });
              AsyncStorage.setItem('birthdateOfExSpouse', '');
            }}
          >
            上記の配偶者の生年月日（西暦で）
          </QuestionTextBoxDate>

          <TouchableOpacity
            style={styles.temporarySaveButton}
            onPress={this.onPressBackButton.bind(this)}
          >
            <Text>
              保存して戻る
            </Text>
          </TouchableOpacity>

          <CheckBox
            disabled={this.state.disableChecked}
            center
            title={'完了したらここをチェック'}
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
  temporarySaveButton: {
    width: '95%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  notesTextBox: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  notesText: {
    color: '#FF0000',
    width: '83%',
  },
});

export default PersonalInfo1;
