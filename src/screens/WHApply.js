import React from 'react';
import { StyleSheet, View } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import WHApplyIndexBar from '../elements/WHApplyIndexBar';
import HWApplyMailBar from '../components/HWApplyMailBar';
import HWApplyList from '../components/HWApplyList';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';
import Agreement from '../components/Agreement';
import Logout from '../components/Logout';

class WHApply extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WHApplyBar />
        <WHApplyIndexBar />
        <HWApplyMailBar />
        <HWApplyList />
        <Agreement />
        <SubmitButton />
        <Logout />
        <Copyrights />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default WHApply;

/*

*/
