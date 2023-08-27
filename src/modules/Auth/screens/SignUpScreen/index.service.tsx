import React, {useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
/* component containing the business logic separated from view for
 api call trigger */
const SignUpService = ({children, navigation}: ScreenTypes.screen) => {
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

  const gotoSignupProperty = () => {
    navigation.navigate('signupProperty');
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
  } as ScreenTypes.SignUpScreen);
};

export default SignUpService;
