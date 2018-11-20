import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Alert,
} from 'react-native';

class FinalSubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  finalOnPress() {
    AsyncStorage
      .multiGet([
        'checked1',
        'checked2',
        'checked3',
        'checked4',
        'checked5',
        'checked6',
        'checked7',
        'checked8',
        'checked9',
        'checked10',
        'checked11',
        'checked12',
        'checked13',
        'checked14',
        'checked15',
      ]).then(response => this.completeButton(response));
  }

  completeButton(response) {
    let numberOfChecked = 0;
    for (i = 0; i < 15; i++) {
      if (response[i][1] === 'true') {
        numberOfChecked++;
      }
    }
    if (numberOfChecked === 15) {
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/Compreted`)
        .doc('Form')
        .set({
          date: new Date(),
          status: 'All Forms completed!!!',
        })
        .then(() => {
          this.props.navigation.navigate('AfterApply1');
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('送信が途中で失敗しました。ネットワークの状態をご確認ください。');
        });
    } else {
      Alert.alert(`${15 - numberOfChecked}個のフォームが「未完了」です。`);
    }
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
          <Text style={styles.buttonText}>
            {this.props.children}
          </Text>
        </TouchableOpacity>
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
    paddingTop: 3,
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
    paddingTop: 10,
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
