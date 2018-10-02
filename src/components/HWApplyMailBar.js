import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import firebase from 'firebase';

class HWApplyMailBar extends React.Component {

  state = {
    emailText: '',
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    this.setState({ emailText: currentUser.email });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mailBar}>
          <Text style={styles.mailBarText}>登録メールアドレス:{this.state.emailText}</Text>
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
    fontSize: 14,
  },
});

export default HWApplyMailBar;
