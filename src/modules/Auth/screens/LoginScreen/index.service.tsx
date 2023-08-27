import React, {useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import {useDispatch} from 'react-redux';
import { setAppLoading } from '@Home/redux/actions';

/* component containing the business logic separated from view for
 api call trigger */
const LoginService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  
  const gotoForgotPassword=()=>{
    navigation.navigate('forgotpassword')
    // dispatch(setAppLoading(true))
    // setTimeout(()=>{
    //   dispatch(setAppLoading(false))
    // },50000)
  }

  const gotoLogin=()=>{
    navigation.navigate('forgotpassword')
  }

  const gotoSignUp=()=>{
    navigation.navigate('signup')
  }

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
    gotoForgotPassword,
    gotoLogin,
    gotoSignUp,

  } as ScreenTypes.login);
};

export default LoginService;
