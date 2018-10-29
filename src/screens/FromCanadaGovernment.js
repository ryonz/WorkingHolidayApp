import React from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage } from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import RadioButtons from '../elements/RadioButtons';
import Copyrights from '../elements/Copyrights';

class FromCanadaGovernment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      disableChecked: false,

      FromCanadaGovernment: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked13').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('FromCanadaGovernment').then(text => {
      if (text !== null) {
        this.setState({ FromCanadaGovernment: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked13', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('FromCanadaGovernment')
        .set({
          FromCanadaGovernment: [{ FromCanadaGovernment: this.state.FromCanadaGovernment }],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit13();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked13', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked13')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit13();
          this.props.navigation.goBack();
        }
      });
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader
          onPress={this.onPressBackButton.bind(this)}
          style={styles.headerTitle}
        >
        カナダ外務・国際貿易省からの{'\n'}
        「個人情報取扱いについて/個人情報保護に関する声明」
        </InfoHeader>

        <View style={styles.textBox}>
          <Text style={styles.textNoteText}>
            以下の、カナダ外務・国際貿易省からの「個人情報の
            取り扱いについて／個人情報保護に関する声明」を読
            み、一番下の質問にお答えください。{'\n'}
            （！！通常は「はい」を回答します！！）
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.textBox}>
          <Text style={styles.text}>
            ●カナダ外務・国際貿易省は、個人から提供された情報の保護等、個人のプライバシー権利を尊重することを約束します。{'\n'}{'\n'}

            ●インターナショナル・エクスペリエンス・カナダ（IEC）への参加は任意です。
            カナダ政府にIEC申請書類一式を提出するということは、
            個人情報の収集および使用、保管、開示について、あなたが同意を示している根拠になります。
            IEC申請・申告書上に記載された情報については、IECを運営し、IEC参加資 格要件を見極める目的で、
            カナダ外務・国際貿易省法に基づいた収集が行われます。{'\n'}{'\n'}

            ●あなたの個人情報は、カナダの法律、特に移民・難民保護法に基づいて、
            カナダへの入国およびカナダ滞在が適格であるか否かを判定するために、
            カナダ外務・国際貿易省、カナダ市民権・移民省および、カナダ・ボーダー・サービス・エージェンシーによって共有されます。{'\n'}{'\n'}

            ●また、あなたの個人情報は、
            カナダ外務・国際貿易省が統計を目的とした2種類のアンケート調査をあなた宛に送る際に使用されます。{'\n'}{'\n'}

            ●IEC申請書類一式のうち、参加資格要件に関するセット1の書類に基づき収集される情報
            （IEC担当部署（カナダ大使館広報部）による審査を受ける）は、申請の処理後2年間保管され、
            その後、破棄されます。電子コピーはあなたが37歳になるまで保存されます。{'\n'}{'\n'}

            ●IECのために個人情報を収集された人は、プライバシー保護法（Privacy Act）の対象となり、
            同法に基づき、一定の例外や適用除外はあるものの、その個人情報が保護され、また、個人情報にアクセスする権利があります。{'\n'}{'\n'}

            ●IECのために収集された個人情報は、カナダ外務・国際貿易省においては
            Personal Information Bank（個人情報バンク／PIB）FAI PPU 901として保存され、
            カナダ市民権・移民省においてはPIB CIC PPU 051として保存されます。
            双方の情報に関する説明は、カナダ政府のウェブサイトInfoSourceでご覧いただけます。{'\n'}{'\n'}

          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
          ◎カナダ外務・国際貿易省のプライバシー保護に関す
            る声明を読み、了解しましたか？{'\n'}
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('FromCanadaGovernment', value);
              this.setState({ FromCanadaGovernment: value });
            }}
            value={this.state.FromCanadaGovernment}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 45,
    paddingLeft: 20,
  },
  textNoteText: {
    width: '83%',
  },
  textBox: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  text: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
    height: 0.8,
    marginTop: 20,
    marginBottom: 20,
  },
  textInputTitle: {
    alignSelf: 'center',
    width: '83%',
    lineHeight: 20,
  },
  textInputBox: {
    width: '100%',
    height: 230,
    marginTop: 20,
  },
  textInput: {
    alignSelf: 'center',
    width: '83%',
    height: 230,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F4F4F4',
    borderWidth: 0.5,
    borderRadius: 10,
  },
});

export default FromCanadaGovernment;
