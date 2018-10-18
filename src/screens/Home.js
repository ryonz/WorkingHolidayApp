import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  AsyncStorage,
} from 'react-native';
import firebase from 'firebase';
import Copyrights from '../elements/Copyrights';


class Home extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
    modal4Visible: false,

  };

  componentDidMount() {
    this.checkIfNeedOpenModal();
    console.log('check first')
  }


  setModalVisible(visible) {
    this.setState({ modal1Visible: visible });
  }

  checkIfNeedOpenModal = async () => {
    try {
      const isFirstOpen = await AsyncStorage.getItem('IS_FIRST_OPEN');
      if (!isFirstOpen || isFirstOpen !== 'true') {
        console.log('Is first open');
        this.setModalVisible(true);
      } else {
        console.log('Is not First Open')
      }
    } catch (error) {
      console.log(error);
    }
  }

  saveModalOpen = async () => {
    try {
      await AsyncStorage.setItem('IS_FIRST_OPEN', 'true');
    } catch (error) {
      console.log(error);
    }
  }

  onModalShow = () => {
    this.saveModalOpen();
  }


  nextModal(num) {
    if (num === 1) {
      this.setState({ modal1Visible: false });
      this.setState({ modal2Visible: true });
    } else if (num === 2) {
      this.setState({ modal2Visible: false });
      this.setState({ modal3Visible: true });
    } else if (num === 3) {
      this.setState({ modal3Visible: false });
      this.setState({ modal4Visible: true });
    } else if (num === 4) {
      this.setState({ modal4Visible: false });
    }
  }

  handleOnpress() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      console.log(user.uid);
      this.props.navigation.navigate('WHApply');
    } else {
      this.props.navigation.navigate('Login');
      console.log('No Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HomeHeaderLogo}>
          <Image
            source={require('../../assets/images/HomeHeaderLogo.png')}
          />
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.buttonText}>JPCANADAについて</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.buttonText}>ワーホリ申請について</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.startApplyButton}
            onPress={this.handleOnpress.bind(this)}
            underlayColor="#F0F0F0"
          >
            <View>
              <Image
                style={styles.applyImage}
                source={require('../../assets/images/new-file.png')}
              />
              <Text style={styles.buttonText}>ワーホリ申請開始</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.linkOfHelp}
            onPress={() => { this.props.navigation.navigate('Help'); }}
          >
            <Text>ヘルプ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vanquBox}>
          <Image style={styles.vanqu} source={require('../../assets/images/vanqu.png')} />
        </View>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>

        <Modal
          visible={this.state.modal1Visible}
          animationType={'none'}
          transparent

        >
          <View style={styles.modal}>
            <View style={styles.modalTitleBox}>
              <Text style={styles.modalTitle}>ようこそ簡単ワーホリ申請へ</Text>
            </View>
            <Text style={styles.modalText}>
              このアプリは、カナダ日系最大手の
              留学エージェント「JPCANADA留学センター」
              が提供するワーキングホリデー申請専用アプリです。
            </Text>

            <Image style={styles.modalImage} source={require('../../assets/images/vanqu2.png')} />

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => { this.nextModal(1); }}
            >
              <Text style={styles.modalCloseButtonText}>次へ</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          visible={this.state.modal2Visible}
          animationType={'none'}
          transparent
        >
          <View style={styles.modal}>
            <View style={styles.modalTitleBox}>
              <Text style={styles.modalTitle}>ようこそ簡単ワーホリ申請へ</Text>
            </View>
            <View style={styles.subModalTitle}>
              <Text style={styles.modalTitle}>特徴1</Text>
            </View>
            <Text style={styles.modalText}>
              本来、英語で申請するワーホリを、
              <Text style={{ color: '#FF0000' }}>日本語で</Text>
              申請することができます。
            </Text>

          <Image style={styles.modalImage} source={require('../../assets/images/vanqu2.png')} />

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => { this.nextModal(2); }}
            >
              <Text style={styles.modalCloseButtonText}>次へ</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          visible={this.state.modal3Visible}
          animationType={'none'}
          transparent
        >
          <View style={styles.modal}>
            <View style={styles.modalTitleBox}>
              <Text style={styles.modalTitle}>ようこそ簡単ワーホリ申請へ</Text>
            </View>
            <View style={styles.subModalTitle}>
              <Text style={styles.modalTitle}>特徴2</Text>
            </View>
            <Text style={styles.modalText}>
              このアプリは<Text style={{ color: '#FF0000' }}>無料</Text>で使用することができます。{'\n'}
              <Text style={{ fontSize: 10 }}>*諸条件あり。詳しくは、「規約」をご覧ください。</Text>
            </Text>

          <Image style={styles.modalImage} source={require('../../assets/images/vanqu2.png')} />

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => { this.nextModal(3); }}
            >
              <Text style={styles.modalCloseButtonText}>次へ</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          visible={this.state.modal4Visible}
          animationType={'none'}
          transparent
          onShow={this.onModalShow}
        >
          <View style={styles.modal}>
            <View style={styles.modalTitleBox}>
              <Text style={styles.modalTitle}>ようこそ簡単ワーホリ申請へ</Text>
            </View>
            <View style={styles.subModalTitle}>
              <Text style={styles.modalTitle}>特徴3</Text>
            </View>
            <Text style={styles.modalText}>
              カナダ日系最大手のエージェントのサポートを受けることができます。
            </Text>

          <Image style={styles.modalImage} source={require('../../assets/images/vanqu2.png')} />

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => { this.nextModal(4); }}
            >
              <Text style={styles.modalCloseButtonText}>ワーホリ申請へ</Text>
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
  HomeHeaderLogo: {
    alignItems: 'center',
    height: 101,
    paddingTop: 26,
    marginBottom: 29,
  },
  buttonBox: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '55%',
    height: 36,
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#707070',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#626262',
    paddingTop: 9,
  },
  startApplyButton: {
    backgroundColor: '#fff',
    width: '44%',
    marginTop: 34,
    marginBottom: 26,
    paddingTop: '9%',
    paddingBottom: '9%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOffset:{
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  applyImage: {
    width: 60,
    height:77,
    alignSelf: 'center',
  },
  linkOfHelp: {

  },
  vanquBox:{
    width: '100%',
    alignItems: 'center',
    marginTop: 29,
    marginBottom: 20,
  },
  vanqu:{
    width: '20%',
    height: 97,
  },
  copyrights: {
    width: '100%',
  },
  modal: {
    backgroundColor: '#fff',
    width: '87%',
    height: 450,
    alignSelf: 'center',
    top: 100,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
  },
  modalTitleBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#82F873',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8.5,
  },
  modalTitle: {
    alignSelf: 'center',
    paddingTop: 18,
    fontSize: 14,
    color: '#505050',
    fontWeight: 'bold',
  },
  subModalTitle: {
    alignSelf: 'center',
    alignItems: 'center',
    top: 8.5,
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 100,
    marginBottom: 27.7,
    paddingTop: 5,
  },
  modalText: {
    width: '73%',
    alignSelf: 'center',
    paddingTop: 15,
    lineHeight:25,
    fontSize: 15,
  },
  modalCloseButton: {
    position: 'absolute',
    bottom: 43,
    width: '40%',
    height: 44,
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
    alignSelf: 'center',
    paddingTop:12.5,
    fontWeight: '900',
  },
  modalImage: {
    position: 'absolute',
    bottom: 120,
    width: '21%',
    height: 87,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Home;
//
// import { Font } from 'expo';
// import Copyrights from '../elements/Copyrights';
//
// import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
//

// state = {
//   fontLoaded: false,
// }
//
//
// async componentWillMount() {
//   await Font.loadAsync({
//     FontAwesome: fontAwesome,
//   });
//
//   this.setState({ fontLoaded: true });
// }




// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   {
//   this.state.fontLoaded ? (
//     <Text style={{ fontFamily : 'FontAwesome', fontSize: 56, color: '#82F873' }}>{'\uf044'}</Text>
//   ) : null
// }
// </View>
