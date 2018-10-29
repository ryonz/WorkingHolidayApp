import React from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage } from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import RadioButtons from '../elements/RadioButtons';
import Copyrights from '../elements/Copyrights';

class Declaration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      disableChecked: false,

      Declaration: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked14').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('Declaration').then(text => {
      if (text !== null) {
        this.setState({ Declaration: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked14', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('Declaration')
        .set({
          Declaration: [{ Declaration: this.state.Declaration }],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit14();
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
      AsyncStorage.setItem('checked14', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked14')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit14();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader
          onPress={this.onPressBackButton.bind(this)}
        >
          申請者の申告
        </InfoHeader>

        <View style={styles.textBox}>
          <Text style={styles.textNoteText}>
            以下の「申請者の申告」を読み、
            一番下の質問にお答えください。{'\n'}
            （！！通常は「はい」を回答します！！）
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.textBox}>
          <Text style={styles.text}>
          ●私は、カナダに入国する前に、入院費および帰国費用までをカバーした総合医療保険に加入し、
          カナダ滞在中の全期間にわたって保障された状態を維持します。
          私 は、就労許可証が発給されるときに、カナダ・ボーダー・サービス・エージェンシーの審査官が、
          保険で保障される期間と同期間有効な就労許可証を発給し、
          後日に私の就労許可を延長することができないことを了解しています。
          私は、カナダ滞在中、怪我や病気のために発生する可能性がある医療費について、
          全面的に負担する責任があることを了承しています。
          私は、カナダ滞在中、時期を問わず、医療保険を解約することを選択した場合、
          IECの参加資格を失ってしまうこと、
          さらに、カナダ政府と滞在するカナダの州または準州の政府が私の医療費および諸経費について、
          一切責任を負わないことを了解しています。{'\n'}{'\n'}

          ●私は、扶養家族（例：妻／夫（内縁を含む）、子供）が、私のIEC申請／参加を理由に、
          カナダに入国、居住することができないことを承知しています。
          私に扶養家族がいる場合は、それぞれが、カナダに入国、居住するために、別途、
          申請書を提出しなければなりません。（IEC参加者、ビジター、就学者、就労者等）{'\n'}{'\n'}

          ●私は、IECが、就学許可を得ている人、
          IEC参加と就学許可を同時に申請しようとしている人
          またはIECの参加期間中に就学許可を申請しようとしている人を対象にしていないことを了解しています。{'\n'}{'\n'}

          ●私は、Letter of Introduction（許可証発給の通知書）
          が発行されたにもかかわらず、通知書に指定された期間にカナダに入国しなかった場合、
          IECに支払ったプログラム参加費が返金されないことを了承しています。{'\n'}{'\n'}

          ●私は、パスポートの有効期限、
          就労許可証の有効期限または医療保険の有効期限のいずれかが切れる前に、
          カナダを出国します。{'\n'}{'\n'}

          ●私は、カナダに入国する前に、入港地において、
          カナダを出国するための搭乗券またはカナダを出国
          するための搭乗券を購入するに足る十分な費用を提示します。{'\n'}{'\n'}

          ●私は、滞在当初に必要となる可能性がある費用
          （部屋代、食事代等）を賄うに足る十分な資金（最低2,500カナダドル）
          を保持しています。私は、カナダにおいて無報酬の仕事に就こうとしている場合、
          全滞在期間にわたる費用を賄うための追加資金の用意があることを証明するよう求められる可能性があることを承知 しています。{'\n'}{'\n'}

          ●私は、私の申請に関して、私本人とのみ話をすることがIECの方針であり、
          いかなる場合も、私のIECプログラム参加申請について、
          第三者（両親、弁護士、コンサルタント、外国政府、旅行会社等）
          と話をすることはないことを承知しています。さらに、私は、申請書を私自身で提
          出しなければならないことを了解しています。ただし、IEC申請書一式の記入に際し、
          第三者のアドバイスを受けることができることを認識しています。
          また、私は、第三者のアドバイスを受けた場合であっても、
          IEC申請書一式に記載するすべての情報に対する責任が私にあることを承知しています。{'\n'}{'\n'}

          ●私は、IECの申請・申告書に正確かつ忠実に記入し、決して虚偽の記述をしていないことを、
          厳粛に誓います。私は、意図的であるか否かにかかわらず、虚偽の記載をした場合には、
          申請書類一式が受理されず、プログラム参加費も返金されないことを了解しています。{'\n'}{'\n'}

          ●私は、ワーキングホリデーのカテゴリーに基づいて、
          IECプログラム参加の主たる目的が、ワーキングホリデーを取得して、カナダ国内を旅しながら、
          旅費を賄うために働くことであることを理解しています。{'\n'}{'\n'}


          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            ◎以上の申告内容を理解し、またそれに同意しますか？（はい／いいえ）{'\n'}
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('Declaration', value);
              this.setState({ Declaration: value });
            }}
            value={this.state.Declaration}
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

export default Declaration;
