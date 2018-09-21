import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Notes = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.notesText}>
        ＊該当する箇所がない場合は「該当なし」「なし」などと記入してください。
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  notesText: {
    color: '#FF0000',
    width: '83%',
  },
});

export default Notes;
