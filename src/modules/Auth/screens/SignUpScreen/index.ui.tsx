import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import React from 'react';
import TextField from '../../../../components/TextField/index';
import TextInputField from '../../../../components/TextInputField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
//component containing the view of Login screen
const SignUpUI = ({
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
  gotoSignupProperty,
  City,
  setCity,
  address,
  setAddress,
  bio,
  setBio,
  name,
  setName,
  username,
  setUsername,
}: ScreenTypes.SignUpScreen) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.dummyView}>
        <View
          style={styles.mainView1}>
          <ScrollView keyboardShouldPersistTaps= 'handled'>
            <View style={styles.dummyView1}>
              <Image source={require('../../../../Assets/Images/image.png')} />
            </View>
            <View style={styles.bluebackground}>
              <Text style={styles.text}>Sign Up</Text>
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={name}
                      label="Name"
                      errorText={emailError}
                      onChangeText={text => setName(text)}
                      secure={false}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={username}
                      label="Username"
                      errorText={passwordError}
                      onChangeText={text => setUsername(text)}
                      secure={false}
                    />
                  </View>
                </View>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={emailValue}
                        label="Email"
                        errorText={emailError}
                        onChangeText={text => setEmailValue(text)}
                        secure={false}
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
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={City}
                        label="City"
                        onChangeText={text => setCity(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={address}
                        label="Address"
                        errorText={passwordError}
                        onChangeText={text => setAddress(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextInputField
                        value={bio}
                        label="Bio"
                        errorText={passwordError}
                        onChangeText={text => setBio(text)}
                        secure={false}
                        multiline={true}
                      />
                    </View>
                    <Button
                      text={'Next'}
                      color={Colors.white}
                      fontSize={15}
                      height={50}
                      width={'100%'}
                      backgroundColor={Colors.darkPrimery}
                      marginBottom={20}
                      onPress={gotoSignupProperty}
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
export default SignUpUI;
