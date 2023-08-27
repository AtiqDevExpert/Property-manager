import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import React, {useRef, useState} from 'react';
/* component containing the business logic separated from view for
 api call trigger */
const ForgotPasswordService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
 const countdownRef = useRef<any>(null);
 const [value, setValue] = useState<string>('');
 const [error, setError] = useState<string | null>(null);


 const sendCode = () =>{ 
  navigation.navigate('otp')
}

 return children({
    navigation,
    countdownRef,
    value,
    error,
    setValue,
    setError,
    sendCode,
  } as ScreenTypes.forgotPassword);
};

export default ForgotPasswordService;
