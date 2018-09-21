import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Copyrights = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.copyright}>Copyright 2018 Jpcanada留学センターAll rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 53,
  },
  copyright: {
    fontSize: 10,
    paddingTop: 19,
    alignSelf: 'center',
  },
});

export default Copyrights;
