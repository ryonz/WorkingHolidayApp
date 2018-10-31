import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { BlurView } from 'expo';


class FinalSubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      modalVisible: false,
    };
  }

  onPressSubmitCompleteNotification() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/status`)
      .doc('Form Compreted')
      .set({
        date: new Date(),
        status: 'All Forms completed!!!',
      })
      .then(() => {
        console.log('then');
        this.props.navigation.navigate('AfterApply1');
        this.setState({ modalVisible: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ modalVisible: false });
        Alert.alert('送信が途中で失敗しました。ネットワークの状態をご確認ください。');
      });
  }

  onPressCloseModal() {
    this.setState({ modalVisible: false });
  }

  finalOnPress() {
    this.setState({ modalVisible: true });
  }

  render() {
    const { style } = this.props;
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={[styles.button, style]}
          onPress={() => { this.finalOnPress(); }}
          disabled={this.state.disabled}
        >
          <Text style={styles.buttonText}>{this.props.children}</Text>
        </TouchableOpacity>

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
              <Text style={styles.modalTitle}>送信の前に</Text>
              <View style={styles.modalTitleUnderbar} />
              <Text style={styles.modalText}>
                全ての入力フォームが「完了」になっていますか？
                {'\n'}{'\n'}
                もし、「未入力」のフォームがあれば、{'\n'}「完了」にしてから
                再度「同意して送信」を押してください。
                {'\n'}{'\n'}
                送信後はJpcanada留学センターの担当者と
                メールでのやり取りになります。
                {'\n'}
                メールは登録したアドレスに送信されます。
                {'\n'}{'\n'}

              </Text>

              <View style={styles.buttonBox}>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => { this.onPressSubmitCompleteNotification(); }}
                >
                  <Text style={styles.modalButtonText}>送信する</Text>
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


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 50,
    height: 68,
  },
  button: {
    alignItems: 'center',
    width: 179,
    height: 46,
    paddingTop: 12,
    marginTop: 11,
    backgroundColor: '#F0F0F0',
    borderRadius: 23,
    borderColor: '#707070',
    borderWidth: 0.4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 0.06,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#626262',
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
  buttonBox: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default FinalSubmitButton;

/*
position: 'absolute',
bottom: 50,
right: 98,
*/
