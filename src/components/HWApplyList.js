import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class HWApplyList extends React.Component {
  state = {
    fontLoaded: false,
    stateOfEdit: '未入力',
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }



  render() {
    return (

      <View style={styles.container}>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonalInfo1'); }}>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報１
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonalInfo2'); }}>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報２
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>{this.state.stateOfEdit}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonalInfo3'); }}>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報３
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報４
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報５
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonalInfo6'); }}>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
                申請者情報６
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報１
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報２
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報３
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報４
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報５
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              家族情報６
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>
              個人情報・同意事項
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listBox}>
            <Text style={styles.privacyPolicyCA}>
              カナダ外務・国際貿易省からの「個人情報取扱い
              {'\n'}
              について/個人情報保護に関する声明
            </Text>
            <View style={styles.inputBotton}>
              <Text style={styles.inputBottonText}>未入力</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.navigationButton}>
                    <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                  </View>
                ) : null
             }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  listBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 39,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  listBoxText: {
    left: 40,
    width: '60%',
    paddingTop: 12,

  },
  privacyPolicyCA: {
    fontSize: 10,
    lineHeight: 16,
    paddingTop: 2,
    left: 40,
  },
  inputBotton: {
    position: 'absolute',
    right: 30,
    width: 62,
    height: 22,
    backgroundColor: '#82F873',
    alignItems: 'center',
    paddingTop: 6,
    borderRadius: 17,
    marginTop: 9,
  },
  inputBottonText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#fff',
  },
  navigationButton: {
    position: 'absolute',
    right: 2,
    width: 30,
    paddingTop: 2,
    alignItems: 'center',
  },
  navigationButtonIcon: {
    fontFamily: 'FontAwesome',
    color: '#CCCCCC',
    fontSize: 30,
  },
});

export default HWApplyList;
