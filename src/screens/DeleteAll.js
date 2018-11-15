import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import firebase from 'firebase';
import { BlurView } from 'expo';
import WHApplyBar from '../components/WHApplyBar';
import LoginModal from './LoginModal';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneX, isiPhoneEightPlus } from '../lib/windowsize';

class DeleteAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalVisibleLogin: false,

      editable: true,
    };
  }

  onPressPreDelete() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({ modalVisibleLogin: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async onPressDelete() {
    this.setState({ editable: false });
    const { currentUser } = firebase.auth();
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    await db.collection(`users/${currentUser.uid}/DeletedAccount`)
      .doc('deletedAccount')
      .set({
        deletedAccount: 'This account is not exsit.',
      });
    if (user) {
      user.delete()
        .then(() => {
          this.setState({ modalVisible: false });
          AsyncStorage.clear();
          this.props.navigation.navigate('Home');
        }).catch(() => {
        });
    } else {
      this.setState({ modalVisible: false });
      this.props.navigation.navigate('Login');
    }
  }

  onPressCloseModal() {
    this.setState({ modalVisible: false });
  }

  setModalVisibelLogin() {
    this.setState({ modalVisibleLogin: false });
  }

  setModalVsible() {
    this.setState({ modalVisible: true });
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <WHApplyBar navigation={() => { this.props.navigation.goBack(); }}>アカウント削除</WHApplyBar>

        <View style={styles.title}>
          <Text style={styles.titleText}>アカウント削除について</Text>
        </View>

        <View style={styles.notes}>
          <Text style={styles.notesText}>
                アカウント情報、入力内容を含む
            <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>
                全ての情報
            </Text>
                を削除します。{'\n'}
            {'\n'}
                これまで入力した内容は全て削除されます。もし、現在ワーホキングホリデーの
                申請中で、担当カウンセラーとやり取りをしている最中であれば、絶対に
                削除しないでください。{'\n'}
                Jpcanada留学センター側で入力された内容が確認できなくなります。{'\n'}
            {'\n'}
                一部情報の変更や削除はログイン後［お問い合わせ］からご依頼ください。{'\n'}
            {'\n'}
                削除後は再度アカウント登録が必要になります。{'\n'}
                ＊ワーホキングホリデー申請以外の機能は引き続きご利用頂けます。
            {'\n'}
          </Text>
        </View>
        <View style={styles.submitButtonBox}>
          <SubmitButton
            style={styles.submitButton}
            onPress={() => { this.onPressPreDelete(); }}
          >
            削除する
          </SubmitButton>
        </View>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>

        <Modal
          visible={this.state.modalVisibleLogin}
          animationType={'none'}
          transparent
        >
          <LoginModal
            handleLoginModal={this.setModalVisibelLogin.bind(this)}
            handleDeleteModal={this.setModalVsible.bind(this)}
            navigation={this.props.navigation}
          />
        </Modal>

        <Modal
          visible={this.state.modalVisible}
          animationType={'fade'}
          transparent
        >
          <BlurView
            style={styles.blurView}
            tint="dark"
          >
            <View style={styles.modalScreen}>
              <Text style={styles.modalText}>
                本当に削除してもよろしいですか？{'\n'}
                以下のボタンを押すとアカウント情報、これまで入力した全てのデータが
                削除されます。{'\n'}
                {'\n'}
                もし、現在担当カウンセラーとワーキングホリデー申請についてやり取りをしている
                最中であれば絶対に削除しないでください。{'\n'}
                {'\n'}
                一部入力情報の変更、削除、メールアドレスの変更などは
                ［お問い合わせ］から
                Jpcanada留学センターにご連絡ください。{'\n'}
              </Text>

              <View style={styles.buttonBox}>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => { this.onPressDelete(); }}
                  editable={this.state.editable}
                >
                  <Text
                    style={styles.modalButtonText}
                  >
                  削除する
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => { this.onPressCloseModal(); }}
                >
                  <Text style={styles.modalButtonText}>やめる</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </Modal>

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
  title: {
    alignSelf: 'center',
    width: 'auto',
    height: 39,
    marginTop: 39,
    marginBottom: 36,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#707070',
    paddingTop: 10,

  },
  titleText: {
    color: '#626262',
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: 'bold',
    marginLeft:10,
    marginRight: 10,
  },
  notes:{
    width: '100%',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  notesText:{
    width: '83%',
  },
  submitButtonBox: {
    alignSelf: 'center',
    marginTop: isiPhoneX() ? 90 : isiPhoneEightPlus() ? 42 : 0,
  },
  submitButton: {
    position: 'absolute',
    bottom: isiPhoneSE() ? 30 : 60,
    backgroundColor: '#fff',
  },
  copyrights: {
    width: '100%',
  },
  buttonBox: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  modalScreen: {
    backgroundColor: '#fff',
    opacity: 1,
    width: '87%',
    height: 'auto',
    alignSelf: 'center',
    top: 130,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
  },
  modalText: {
    width: '82%',
    alignSelf: 'center',
    marginTop: 25,
    paddingTop: 20,
    color: '#FF0000',
  },
  modalButtonText: {
    fontSize: 14,
    color: '#626262',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 9,
    marginLeft:20,
    marginRight: 20,
  },
  modalButton: {
    width: 100,
    height: 35,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#fff',
  },
  blurView: {
    flex: 1,
    width: '100%',
  },
});

export default DeleteAll;
