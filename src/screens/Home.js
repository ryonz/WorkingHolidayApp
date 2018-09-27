import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Copyrights from '../elements/Copyrights';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HomeHeaderLogo}>
          <Image
            source={require('../../assets/images/HomeHeaderLogo.png')}
          />
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.buttonText}>JPCANADAについて</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.buttonText}>ワーホリ申請について</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.startApplyButton} onPress={() => { this.props.navigation.navigate('Login'); }} underlayColor="#F0F0F0">
            <View>
              <Image style={styles.applyImage} source={require('../../assets/images/new-file.png')} />
              <Text style={styles.buttonText}>ワーホリ申請開始</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.linkOfHelp}>
            <Text>ヘルプ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vanquBox}>
          <Image style={styles.vanqu} source={require('../../assets/images/vanqu.png')} />
        </View>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  HomeHeaderLogo: {
    alignItems: 'center',
    height: 101,
    paddingTop: 26,
    marginBottom: 29,
  },
  buttonBox: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '55%',
    height: 36,
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#707070',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#626262',
    paddingTop: 9,
  },
  startApplyButton: {
    backgroundColor: '#fff',
    width: '44%',
    marginTop: 34,
    marginBottom: 26,
    paddingTop: '9%',
    paddingBottom: '9%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOffset:{
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  applyImage: {
    width: 60,
    height:77,
    alignSelf: 'center',
  },
  linkOfHelp: {

  },
  vanquBox:{
    width: '100%',
    alignItems: 'center',
    marginTop: 29,
    marginBottom: 20,
  },
  vanqu:{
    width: '20%',
    height: 97,
  },
  copyrights: {
    width: '100%',
  },
});

export default Home;
//
// import { Font } from 'expo';
// import Copyrights from '../elements/Copyrights';
//
// import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
//

// state = {
//   fontLoaded: false,
// }
//
//
// async componentWillMount() {
//   await Font.loadAsync({
//     FontAwesome: fontAwesome,
//   });
//
//   this.setState({ fontLoaded: true });
// }




// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   {
//   this.state.fontLoaded ? (
//     <Text style={{ fontFamily : 'FontAwesome', fontSize: 56, color: '#82F873' }}>{'\uf044'}</Text>
//   ) : null
// }
// </View>
