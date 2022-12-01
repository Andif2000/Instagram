import React, { useContext, useState } from 'react'
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

import { Text, TextBold } from '../../components/Fonts';
import { AuthContext } from '../../context/AuthContext';
import { Colors } from '../../assets/Colors';
import { StatusBar } from 'expo-status-bar';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import InputLogin from '../../components/InputLogin';

const sizeScreen = Dimensions.get('window');
const height2 = sizeScreen.height - (Math.round(sizeScreen.height * 0.58));
const height3 = sizeScreen.height - (Math.round(sizeScreen.height * 0.42));
const width2 = Math.round(sizeScreen.width - (sizeScreen.width * 0.1));

const Login = ({ navigation }) => {
  const { Login, message, setMessage } = useContext(AuthContext);

  const [seePassword, setSeePassword] = useState(true);
  const [noHp, setNoHp] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisable, setSubmitDisable] = useState(false);

  function onChangedNoHp(text) {
    let newText = '';
    let numbers = '0123456789';
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      else {
        setMessage("Mohon Masukkan Angka Saja");
        return
      }
    }
    setNoHp(text);
  }

  const Message = ({ text }) => {
    return (
      <View
        style={{ flexDirection: 'row', marginBottom: 15 }}>
        <Text
          style={{ color: '#A10000', marginTop: 5 }}>
          {text}
        </Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingWrapper>
      <View
        style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Colors.colorPurple} />
        <View
          style={{ height: height3, backgroundColor: Colors.colorPrimary, alignItems: 'center', justifyContent: 'space-around', alignItems: 'center' }}>
          <Image
            source={require('../../assets/img/bg.png')}
            style={styles.ImageBg} />
          <Image
            source={require('../../assets/img/LogoLogin.png')}
            style={styles.Logo} />
          <View
            style={{ flex: 1, zIndex: 99, width: width2, alignItems: 'center' }}>
            <Image
              source={require('../../assets/img/ilustrasiLogin.png')}
              style={styles.Image} />
          </View>
          <Text
            style={styles.TextLogin}>
            LOGIN
          </Text>
        </View>
        <View
          style={{ height: height2, backgroundColor: Colors.colorWhite, justifyContent: 'space-around', paddingHorizontal: 20, paddingBottom: 30 }}>
          <View>
            <InputLogin
              placeholder='No Hp'
              icon={require('../../assets/icon/iconPhoneNumber.png')}
              keyboardType='numeric'
              value={noHp}
              onChangeText={onChangedNoHp} />
            <InputLogin
              password
              placeholder='Password'
              icon={require('../../assets/icon/iconLock.png')}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={seePassword}
              setSeePassword={setSeePassword}>
            </InputLogin>
            {message !== '' && <Message text={message} />}
          </View>
          <View>
            <TouchableOpacity
              disabled={submitDisable}
              onPress={() => Login(noHp, password)}
              style={styles.Button}>
              <Text
                style={{ color: Colors.colorWhite }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{ marginVertical: 10, }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LupaPassword')}>
                <Text
                  style={{ color: Colors.colorPrimary, textAlign: 'center' }}>
                  Lupa Password
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text
                style={styles.Text}>
                Belum Terdaftar?  Silahkan </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Daftar')}>
                <TextBold
                  style={{ color: Colors.colorPrimary }}>
                  Daftar
                </TextBold>
              </TouchableOpacity>
              <Text> ... Gratis
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  ScreenDefault: {
    alignItems: 'center',
    zIndex: 99
  },
  ImageBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    resizeMode: 'stretch'
  },
  Logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    zIndex: 99,
    marginTop: 50
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: 99,
  },
  IconInput: {
    height: 20,
    width: 17,
    marginHorizontal: 15
  },
  TextLogin: {
    color: Colors.colorBlack,
    fontSize: 23,
    marginTop: 10,
    zIndex: 99,
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 4
  },
  ContainerInput: {
    backgroundColor: Colors.colorWhite,
    height: 60,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.colorLight,
    borderRadius: 5,
    elevation: 1.5,
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  Button: {
    paddingVertical: 10,
    backgroundColor: Colors.colorPrimary,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  Text: {
    color: Colors.colorBlack
  }
})

