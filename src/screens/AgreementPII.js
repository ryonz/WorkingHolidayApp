import React from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage, TextInput } from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import RadioButtons from '../elements/RadioButtons';
import Copyrights from '../elements/Copyrights';

class AgreementPII extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      editable: true,
      disableChecked: false,

      AgreementPII: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked12').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ disabled: true });
        this.setState({ editable: false });
      } else if (value === 'false') {
        this.setState({ disabled: false });
        this.setState({ editable: true });
      }
    });
    AsyncStorage.getItem('AgreementPII').then(text => {
      if (text !== null) {
        this.setState({ AgreementPII: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked12', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('AgreementPII')
        .set({
          AgreementPII: [{ AgreementPII: this.state.AgreementPII }],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit12();
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
      this.setState({ editable: true });
      AsyncStorage.setItem('checked12', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked12')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit12();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader onPress={this.onPressBackButton.bind(this)}>個人情報・同意事項</InfoHeader>

        <View style={styles.textBox}>
          <Text style={styles.textNoteText}>以下の質問を読んで、一番下の◎の問いにお答え下さい。</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.textBox}>
          <Text style={styles.text}>
            ●この2年間で、あなたもしくは家族に肺結核にかかった人、もしくは肺結核患者と接触の多い環境にいた人がいますか？{'\n'}{'\n'}
            ●カナダ滞在中に社会保障や医療保障が必要となるような、重大な身体的・精神的疾患を持っていますか？{'\n'}{'\n'}
            ●ビザの期限を超えて滞在したり、許可なく就学、就労したことがありますか？{'\n'}{'\n'}
            ●国を問わず、ビザや許可書（承認）などの申請を却下されたり、または国外退去を命じられたことがありますか？{'\n'}{'\n'}
            ●国を問わず、犯罪で逮捕されたことがありますか？{'\n'}{'\n'}
            ●軍隊、自衛隊、警察などでの勤務経験がありますか？{'\n'}{'\n'}
            ●暴力行為や犯罪行為などに関わる政治団体や宗教団体に参加している、または参加していたことがありますか？{'\n'}{'\n'}
            ●カナダ市民権・永住権を持つ家族がいますか？ アメリカの永住権を持っていますか？{'\n'}{'\n'}
            ●雇用主からのWritten Offerがありますか？ ケアギバーの訓練をうけたことがありますか？{'\n'}{'\n'}
            ●カナダの一時就労者の配偶者・コモンローパートナーとしての渡航ですか？{'\n'}{'\n'}
            ●CIC認定機関での健康診断を受けましたか？{'\n'}{'\n'}
            ●カナダ渡航後、次のカテゴリーで働く予定がありますか？（公的任務や航空関係、健康診断が必要な職業）{'\n'}{'\n'}
            ○軍事・政府・政治（政治的活動、調査など）・警察・裁判所関係（鑑定人・公証人）の仕事{'\n'}{'\n'}
            ○医療（医師・医学部生インターンなど）・救命救急・看護・介護関係の仕事{'\n'}{'\n'}
            ○幼児・小・中・高校の教師 ニュースレポーター・映画製作などマスコミ・メディア関係の仕事{'\n'}{'\n'}
            ○プロアスリート（コーチ）・プロアーティストなどの仕事{'\n'}{'\n'}
            ○宗教関係（宗教的活動など含む）の仕事 航空関係、航空機事故調査などの仕事{'\n'}{'\n'}
            ○長期ビジネス出張・滞在者{'\n'}{'\n'}
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            ◎すべて「いいえ」ですか。「はい」の項目がありますか？{'\n'}
            （通常は全て「いいえ」を回答する質問です）{'\n'}
            ＊「はい」の項目がある場合は、どの項目が該当するか詳細をご回答ください。
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('AgreementPII', value);
              this.setState({ AgreementPII: value });
            }}
            value={this.state.AgreementPII}
            disabled={this.state.disabled}
          />
        </View>

        <Text style={styles.textInputTitle}>
          上記で「はい」を選択した方は、以下にどの項目が該当するか詳細を回答して下さい。{'\n'}
        </Text>

        <View style={styles.textInputBox}>
          <TextInput
            onChangeText={text => {
              AsyncStorage.setItem('extra', text);
              this.setState({ extra: text });
            }}
            value={this.state.extra}
            editable={this.state.editable}
            style={styles.textInput}
            multiline
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

export default AgreementPII;
