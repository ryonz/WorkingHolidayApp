import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import Copyrights from '../elements/Copyrights';
import RegulationText from '../elements/RegulationText';


class Signup extends React.Component {

  state = {
    email: '',
    password: '',
    modalMailVisible: false,
    modalPasswordVisible: false,
};

//

  handleSignup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success', user);
        this.props.navigation.navigate('WHApplyNotification1');
      }).catch((error) => {
        console.log(error);
      });
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
      <View style={styles.container}>

        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>登録</Text>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => { this.props.navigation.goBack(); }}
            underlayColor="#F0F0F0">
            <Image style={styles.backbuttonImage} source={require('../../assets/images/left-arrow.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>
            メールアドレス
            <TouchableOpacity
              style={styles.questionMarkBox}
              onPress={() => { this.openMailModal(); }}
            >
              <Image
                style={styles.questionMark}
                source={require('../../assets/images/question-mark.png')}
              />
            </TouchableOpacity>
          </Text>
          <TextInput
            value={this.state.email}
            onChangeText={(text) => { this.setState({ email: text });}}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            editable
            placeholder={'ryugaku-taro@exapmple.com'}
          />
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>
            パスワード(任意)
            <TouchableOpacity
              style={styles.questionMarkBox}
              onPress={() => { this.openPasswordModal(); }}
            >
              <Image
                style={styles.questionMark}
                source={require('../../assets/images/question-mark.png')}
              />
            </TouchableOpacity>
          </Text>
          <TextInput
            value={this.state.password}
            onChangeText={(text) => { this.setState({ password: text });}}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={styles.textInput}
            editable
            placeholder={'0文字以上16以内'}
          />
        </View>

        <RegulationText />

        <TouchableOpacity style={styles.loginButtonBox} onPress={this.handleSignup.bind(this)}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>同意して登録</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>

        <Modal
          style={styles.modalBox}
          visible={this.state.modalMailVisible}
          animationType={'fade'}
          transparent
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
        </Modal>

        <Modal
          style={styles.modalBox}
          visible={this.state.modalPasswordVisible}
          animationType={'fade'}
          transparent={true}
        >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>パスワードについて</Text>
            <View style={styles.modalTitleUnderbar} />
            <Text style={styles.modalText}>
              ＊ご自身の携帯にアクセスできるのがご自
              身だけであれば、パスワード設定は必須で
              はありません。このアプリの情報を他の人
              が見てしまう可能性がある方の場合は、パ
              スワードを設定されることをお勧めいたし
              ます。
            </Text>
            <TouchableOpacity
              style={styles.modalPasswordCloseButton}
              onPress={() => { this.closePasswordModal(); }}
            >
              <Text style={styles.modalCloseButtonText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </Modal>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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
    left: -100,
    paddingBottom: 6,
  },
  questionMarkBox: {
    width: 20,
    height: 20,
    paddingLeft: 3,
    paddingTop: 8,
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
    position: 'absolute',
    //alignSelf: 'flex-end',
    width: '100%',
    bottom: 0,
  },
  modal: {
    backgroundColor: '#fff',
    opacity: 0.9,
    width: '87%',
    height: 250,
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
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#F0F0F0',
  },
});

export default Signup;
