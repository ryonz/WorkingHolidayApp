import React from 'react';
import firebase from 'firebase';
import { StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import { BlurView } from 'expo';
import Copyrights from '../elements/Copyrights';
import RegulationText from '../elements/RegulationText';
import { isiPhoneSE, isiPhoneX, isiPhoneEightPlus } from '../lib/windowsize';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      modalMailVisible: false,
      modalPasswordVisible: false,

      editable: true,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('birthday')
      .then((num) => {
        this.setState({ password: num });
      });
  }

  handleSignup() {
    this.setState({ editable: false });
    AsyncStorage.getItem('isFirstAccount')
      .then((response) => {
        if (response[0][1] !== null) {
          Alert.alert('このデバイスには既にアカウントが存在します。削除してから再登録してください。')
        }
      })
      .catch(() => {
        if (this.state.email !== null) {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
              this.handleVerifyEmailAddress();
              Alert.alert('確認メールを送信しました。メールは届くまでに数分かかる場合があります。');
              AsyncStorage.setItem('isFirstAccount', 'This is first Account on this device.');
              this.props.navigation.navigate('WHApply');
            }).catch((error) => {
              Alert.alert('既に登録されたメールアドレスの可能性があります。');
              console.log(error);
            });
        } else if (this.state.email === null) {
          Alert.alert('メールアドレスを入力してください。');
        }
      })
  }

  handleVerifyEmailAddress() {
    const { currentUser } = firebase.auth();
    currentUser.sendEmailVerification()
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      })
  }


  openMailModal() {
    this.setState({ modalMailVisible: true })
  }

  closeMailModal() {
    this.setState({ modalMailVisible: false })
  }

  openPasswordModal() {
    this.setState({ modalPasswordVisible: true })
  }

  closePasswordModal() {
    this.setState({ modalPasswordVisible: false })
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.headerHWApply}>
            <Text
              style={styles.headerText}
            >
              アカウント登録２
            </Text>
            <TouchableOpacity
              style={styles.backbutton}
              onPress={() => { this.props.navigation.goBack(); }}
              underlayColor="#F0F0F0"
            >
              <Image
                style={styles.backbuttonImage}
                source={require('../../assets/images/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.notesBox}>
            <Text style={styles.notesText}>
              ※メールアドレスは一度設定すると変更ができません。ご注意ください。登録後、メールアドレスを変更する際は
              ホーム画面の［ヘルプ＞アカウントの削除について］からアカウントを削除して再度作り直す必要があります。
            </Text>
          </View>

          <View style={styles.notesBox}>
            <Text style={styles.notesText}>
              ※初期パスワードは生年月日です。変更する場合はアカウント登録後［パスワード変更］より
              変更してください。
            </Text>
          </View>

          <View style={styles.textInputBox}>
            <View style={styles.textInputBoxTextline}>
              <Text style={styles.textInputTitle}>
                メールアドレス
              </Text>
              <TouchableOpacity
                style={styles.questionMarkBox}
                onPress={() => { this.openMailModal(); }}
              >
                <Image
                  style={styles.questionMark}
                  source={require('../../assets/images/question-mark.png')}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              onChangeText={(text) => { this.setState({ email: text }); }}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              value={this.state.email}
              editable
              placeholder={'ryugaku-taro@exapmple.com'}
              textContentType={'emailAddress'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.textInputBox}>
            <View style={styles.textInputBoxTextline}>
              <Text style={styles.textInputTitlePassword}>
                パスワード
              </Text>
              <TouchableOpacity
                style={styles.questionMarkBox}
                onPress={() => { this.openPasswordModal(); }}
              >
                <Image
                  style={styles.questionMark}
                  source={require('../../assets/images/question-mark.png')}
                />
              </TouchableOpacity>
            </View>

            <TextInput
              value={this.state.password}
              onChangeText={(text) => { this.setState({ password: text }); }}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              style={styles.textInput}
              editable={false}
              placeholder={'8文字以上16以内'}
              textContentType={'password'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <RegulationText />

          <View style={styles.loginButtonBox}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={this.handleSignup.bind(this)}
              editable={this.state.editable}
            >
              <Text style={styles.loginButtonText}>同意して登録</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.copyrights}>
            <Copyrights />
          </View>

          <Modal
            style={styles.modalBox}
            visible={this.state.modalMailVisible}
            animationType={'fade'}
            transparent
          >
            <BlurView
              style={styles.blurView}
              tint="dark"
            >
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>メールアドレスについて</Text>
                <View style={styles.modalTitleUnderbar} />
                <Text style={styles.modalText}>
                  ＊ワーキングホリデーの申請に際しまして、
                  緊急に追加資料のご提示や追加でご質問を
                  させていただくことがあります。
                  必ず連絡が取れるメールアドレスをご登録ください。
                  また、緊急のメールもございます。メールを受信され
                  た際は速やかに内容を確認し、ご返信して頂きますよ
                  うご協力をお願いいたします。
                </Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => { this.closeMailModal(); }}
                >
                  <Text style={styles.modalCloseButtonText}>閉じる</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Modal>

          <Modal
            visible={this.state.modalPasswordVisible}
            animationType={'fade'}
            transparent
          >
            <BlurView
              style={styles.blurView}
              tint="dark"
            >
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>パスワードについて</Text>
                <View style={styles.modalTitleUnderbar} />
                <Text style={styles.modalText}>
                  ＊初期パスワードは生年月日です。変更する際はアカウント作成後、
                  ［パスワード変更］より変更してください。
                </Text>
                <TouchableOpacity
                  style={styles.modalPasswordCloseButton}
                  onPress={() => { this.closePasswordModal(); }}
                >
                  <Text style={styles.modalCloseButtonText}>閉じる</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Modal>
        </KeyboardAvoidingView>
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
  notesBox: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 15,
  },
  notesText: {
    color: '#FF0000',
    width: '83%',
  },
  headerHWApply: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 96,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
    marginBottom: 49,
  },
  headerText: {
    fontSize: 20,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#626262',
  },
  backbutton: {
    position: 'absolute',
    top: 50,
    left: 18,
    width: 20,
    height: 20,
  },
  backbuttonImage: {
    width: 20,
    height: 20,
  },
  textInputBox: {
    alignItems: 'center',
    marginTop: 12,
  },
  textInputBoxTextline: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  textInputBoxPassword: {
    alignItems: 'center',
    marginTop: 12,
    paddingRight: 25,
  },
  textInput: {
    width: '83%',
    height: 44,
    paddingLeft: 16,
    backgroundColor: '#F4F4F4',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 6,
  },
  textInputTitle: {
    fontSize: 13,
    left:  isiPhoneSE() ? 30 : isiPhoneEightPlus() ? 35 : 32,
    paddingBottom: 6,
  },
  textInputTitlePassword: {
    fontSize: 13,
    left:  isiPhoneSE() ? 30 : isiPhoneEightPlus() ? 35 : 32,
    paddingBottom: 6,
  },
  questionMarkBox: {
    width: 20,
    height: 20,
    marginBottom: 3,
    paddingLeft: 40,
  },
  questionMark: {
    width: 14,
    height: 14,
  },
  loginButtonBox: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '47%',
    height: 46,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    borderColor: '#707070',
    marginTop: 20,
    marginBottom:  20,
    borderWidth: 0.3,
    borderRadius: 23,
  },
  loginButtonText: {
    paddingTop: 14,
    color: '#626262',
    fontWeight: '900',
    fontSize: 20,
  },
  copyrights: {
    width: '100%',
    bottom:  isiPhoneX() ? 25 : 0,
  },
  modal: {
    backgroundColor: '#fff',
    opacity: 0.9,
    width: '87%',
    height: 'auto',
    alignSelf: 'center',
    top: 137,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
  },
  modalTitle: {
    alignSelf: 'center',
    paddingTop: 24,
    fontSize: 14,
    color: '#505050',
    fontWeight: 'bold',
  },
  modalTitleUnderbar: {
    width: '50%',
    height: 1,
    alignSelf: 'center',
    marginTop: 5.5,
    backgroundColor: '#707070',
  },
  modalText: {
    width: '82%',
    alignSelf: 'center',
    paddingTop: 20,
    color: '#FF0000',
  },
  modalCloseButton: {
    width: '20%',
    height: 28,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#F0F0F0',
  },
  modalCloseButtonText: {
    fontSize: 14,
    color: '#626262',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 6,
  },
  modalPasswordCloseButton: {
    width: '20%',
    height: 28,
    alignSelf: 'center',
    marginTop: 55,
    marginBottom: 15,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#F0F0F0',
  },
  blurView: {
    flex: 1,
    width: '100%',
  },
});

export default Signup;
