import React, {useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
/* component containing the business logic separated from view for
 api call trigger */
const SignUpPropertyService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [City, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const [image, setImage] = useState('');
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);

  const progressStepsStyle = {
    activeStepIconBorderColor: '#0277FA',
    activeLabelColor: '#0277FA',
    activeStepNumColor: '#0277FA',
    activeStepIconColor: '#fff',
    completedStepIconColor: '#fff',
    completedProgressBarColor: '#0277FA',
    completedCheckColor: '#0277FA',
    borderWidth: 0,
    disabledStepNumColor: '##0277FA',
  };

  const buttonTextStyle = {
    color: '#fff',
    // fontWeight: 'bold',
  };

  const onNextStep = () => {
    navigation.navigate('addNewClient');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };
 const goBack = () => {
   navigation.goBack();
 };

  const gotoSignupProperty = () => {
    navigation.navigate('signupProperty');
  };

  const takePhotoFromCamera = () => {
    setVisible(false);

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (selecter === false) {
        setImage(image.path);
      } else {
        Alert.alert('Error1');
      }
    });
  };

  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (selecter === false) {
        setImage(image.path);
      } else {
        Alert.alert('Error2');
      }
    });
  };

  const onClear = () => {
    setImage('');
  };

  return children({
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
  } as ScreenTypes.SignUpScreen);
};

export default SignUpPropertyService;
