import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';

import { isiPhoneSE } from '../lib/windowsize';

class HWApplyMailBar extends React.Component {
  state = {
    email: '',
  }

  componentWillMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;
    if (currentUser) {
      this.setState({ email: userEmail });
      db.collection(`users/${currentUser.uid}/${userEmail}`)
        .doc('メールアドレス')
        .set({
          'メールアドレス ': userEmail,
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mailBar}>
          <Text style={styles.mailBarText}>
            登録メールアドレス:{this.state.email}
          </Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mailBar: {
    height: 39,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    paddingTop: 10,
  },
  mailBarText: {
    fontSize: isiPhoneSE() ? 12 : 15,
    paddingTop: 2,
  },
});

export default HWApplyMailBar;
