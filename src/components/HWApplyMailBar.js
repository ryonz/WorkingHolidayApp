import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';

class HWApplyMailBar extends React.Component {
  state = {
    email: '',
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;
    if (currentUser) {
      this.setState({ email: userEmail });
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
    fontSize: 15,
    paddingTop: 2,
  },
});

export default HWApplyMailBar;
