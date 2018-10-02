import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class HWApplyMailBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mailBar}>
          <Text style={styles.mailBarText}>登録メールアドレス:</Text>
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
