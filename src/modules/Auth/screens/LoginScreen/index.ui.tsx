import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';

import Modal from 'react-native-modal';
//component containing the view of Login screen
const LoginUI = ({
  navigation,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  passwordError,
  setPasswordError,
  emailError,
  setEmailError,
  gotoForgotPassword,
  gotoLogin,
  gotoSignUp,
}: ScreenTypes.login) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.dummyView1}>
              <Image source={require('../../../../Assets/Images/image.png')} />
            </View>
            <View style={styles.bluebackground}>
              <Text style={styles.text}>Login Via Email</Text>

              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={emailValue}
                      label="Email"
                      errorText={emailError}
                      onChangeText={text => setEmailValue(text)}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={passwordValue}
                      label="Password"
                      errorText={passwordError}
                      onChangeText={text => setPasswordValue(text)}
                      secure={true}
                    />
                  </View>
                  <View>
                    <View style={styles.Forgetpass}>
                      <TransparentBtn
                        text={'Forget Password?'}
                        color={Colors.darkPrimery}
                        fontSize={16}
                        width={'45%'}
                        onPress={gotoForgotPassword}
                      />
                    </View>
                  </View>
                </View>
                <>
                  <Button
                    text={'Login'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    onPress={() => navigation.navigate('otp')}
                    // onPress={gotoLogin}
                  />

                  <View style={styles.dontaccountview}>
                    <Text>Don’t have an Account?</Text>
                    <TransparentBtn
                      text={'SignUp'}
                      color={Colors.darkPrimery}
                      fontSize={15}
                      width={'15%'}
                      onPress={gotoSignUp}
                    />
                  </View>
                </>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginUI;
