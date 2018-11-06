import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  AsyncStorage,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import Copyrights from '../elements/Copyrights';
import WHApplyNotification1 from '../components/WHApplyNotification1';
import WHApplyNotification2 from '../components/WHApplyNotification2';

class Login extends React.Component {
  state = {
    email: 'user0@example.com',
    password: '19920101',
    notificationModal1: false,
    notificationModal2: false,

    editable: true,
  };

  componentDidMount() {
    this.checkIfNeedOpenModal();
  }

  setModalVisible(visible) {
    this.setState({ notificationModal1: visible });
  }

  checkIfNeedOpenModal = async () => {
    try {
      const isFirstOpen = await AsyncStorage.getItem('IS_FIRST_LOGIN_OPEN');
      if (!isFirstOpen || isFirstOpen !== 'true') {
        console.log('Is first open');
        this.setModalVisible(true);
      } else {
        console.log('Is not First Open');
      }
    } catch (error) {
      console.log(error);
    }
  };

  saveModalOpen = async () => {
    try {
      await AsyncStorage.setItem('IS_FIRST_LOGIN_OPEN', 'true');
    } catch (error) {
      console.log(error);
    }
  };

  onModalShow = () => {
    this.saveModalOpen();
  };

  nextModal(num) {
    if (num === 0) {
      this.setState({ notificationModal2: true });
      this.setState({ notificationModal1: false });
    } else if (num === 1) {
      this.setState({ notificationModal2: false });
    }
  }

  handleLogin() {
    this.setState({ editable: false });
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('WHApply');
      })
      .catch(error => {
        Alert.alert('メールアドレスまたはパスワードが違います。');
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>ログイン</Text>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              this.props.navigation.goBack();
            }}
            underlayColor="#F0F0F0"
          >
            <Image
              style={styles.backbuttonImage}
              source={require('../../assets/images/left-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>メールアドレス</Text>
          <TextInput
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            editable
            placeholder={'ryugaku-taro@exapmple.com'}
            textContentType={'emailAddress'}
          />
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>パスワード　　</Text>
          <TextInput
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={styles.textInput}
            editable
            placeholder={'8文字以上16以内'}
            textContentType={'password'}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('UpdatePassword');
          }}
        >
          <Text style={styles.forgetPasswordText}>パスワードを忘れた場合</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButtonBox}
          onPress={this.handleLogin.bind(this)}
          editable={this.state.editable}
        >
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>ログイン</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Birthday');
          }}
        >
          <Text style={styles.forgetPasswordText}>登録がまだの方はこちら</Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('../../assets/images/kanatan.png')} />

        <View style={styles.copyrights}>
          <Copyrights />
        </View>

        <Modal visible={this.state.notificationModal1} animationType={'none'}>
          <WHApplyNotification1
            onPress={() => {
              this.nextModal(0);
            }}
          />
        </Modal>

        <Modal
          visible={this.state.notificationModal2}
          animationType={'none'}
          onShow={this.onModalShow}
        >
          <WHApplyNotification2
            onPress={() => {
              this.nextModal(1);
            }}
          />
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
    width: 40,
    height: 40,
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
    left: -110,
    paddingBottom: 6,
  },
  forgetPasswordText: {
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 15,
    fontSize: 14,
    color: '#ADADAD',
    fontWeight: '900',
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
  image: {
    alignSelf: 'center',
    width: '48%',
    height: 157,
    marginBottom: 20,
  },
  copyrights: {
    position: 'absolute',
    // alignSelf: 'flex-end',
    width: '100%',
    bottom: 0,
  },
});

export default Login;
