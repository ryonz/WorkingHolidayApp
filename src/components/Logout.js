import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';


class Logout extends React.Component {
  handleLogout() {
    firebase.auth().signOut()
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logout}
          onPress={this.handleLogout.bind(this)}
        >
          <Text style={styles.logoutText}>ログアウト</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logout: {
    width: 'auto',
    height: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
    paddingLeft: 3,
    paddingRight: 3,
  },
  logoutText: {
    fontSize: 11,
    color: '#ADADAD',
  },
});


export default Logout;
