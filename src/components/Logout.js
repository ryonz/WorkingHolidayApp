import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


class Logout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logout}>
          <Text style={styles.logoutText}>ログアウト</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logout: {
    width: 70,
    height: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
    paddingLeft: 11,
  },
  logoutText: {
    fontSize: 11,
    color: '#ADADAD',
  },
});


export default Logout;
