import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState } from 'react';
import TextField from '../../../../components/TextField/index';
import TextInputField from '../../../../components/TextInputField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

import PickerButton from '@components/Button/pickerButton';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import { BackIcon, CrossRedIcon, UploadIcon } from '../../../../Assets/SVG/Svg';
//component containing the view of Login screen
const SignUpPropertyUI = ({
  navigation,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  passwordError,
  setPasswordError,
  emailError,
  setEmailError,
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
  progressStepsStyle,
  buttonTextStyle,
  onNextStep,
  onPrevStep,
  defaultScrollViewProps,
  onSubmitSteps,
  image,
  setImage,
  selecter,
  setSelecter,
  visible,
  setVisible,
  takePhotoFromCamera,
  takePhotoFromGallery,
  onClear,
  goBack,
}: ScreenTypes.SignUpScreen) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity onPress={goBack} style={styles.buttonTouch}>
        <BackIcon onPress={goBack} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>Setup New Profile</Text>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={name}
                      label="Society Name"
                      onChangeText={text => setName(text)}
                      secure={false}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={username}
                      label="Total Investment"
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
                        label="Society Location (Optional)"
                        errorText={emailError}
                        onChangeText={text => setEmailValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={passwordValue}
                        label="Society Area (Optional)"
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
                      <TextInputField
                        value={bio}
                        label="Description"
                        errorText={passwordError}
                        onChangeText={text => setBio(text)}
                        secure={false}
                      />
                    </View>
                    <View>
                      <Text style={styles.cover}>Cover Image</Text>

                      {image === '' ? (
                        <>
                          <View style={styles.coverView}>
                            <TouchableOpacity
                              style={styles.touch1}
                              onPress={() => setVisible(true)}>
                              <UploadIcon style={styles.uploadIcon} />
                              <Text>Upload Image</Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      ) : (
                        <>
                          <View style={styles.coverView}>
                            <View style={styles.imageBox}>
                              <TouchableOpacity
                                onPress={onClear}
                                style={styles.touchable}>
                                <CrossRedIcon style={styles.crossRedIcon2} />
                              </TouchableOpacity>
                              <View style={styles.imageContainer}>
                                <Image
                                  resizeMode="stretch"
                                  source={{uri: image}}
                                  style={styles.images}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}
                    </View>
                  </View>
                </>
                <View style={styles.buttonView}>
                  <Button
                    text={'Next'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={80}
                    onPress={onNextStep}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* All Modals and Extra Sheets */}
      <>
        <Modal isVisible={visible}>
          <View style={styles.ModalView}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalIcon}>
              <CrossRedIcon style={styles.crossRedIcon} />
            </TouchableOpacity>
            <Text style={{color: Colors.modalTextColor}}>
              Click your desired Button
            </Text>
            <View style={styles.ModalBtnView}>
              <PickerButton
                text={'Open camera'}
                color={Colors.white}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={30}
                backgroundColor={Colors.darkPrimery}
                borderColor={Colors.darkPrimery}
                borderWidth={1}
                marginBottom={10}
                onPress={takePhotoFromCamera}
              />

              <PickerButton
                text={'Open Gallery'}
                color={Colors.white}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={30}
                backgroundColor={Colors.darkPrimery}
                borderColor={Colors.darkPrimery}
                borderWidth={1}
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal>
      </>
    </SafeAreaView>
  );
};
export default SignUpPropertyUI;
