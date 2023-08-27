import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import React, {useRef} from 'react';
/* component containing the business logic separated from view for
 api call trigger */
const OTPService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
 const countdownRef = useRef<any>(null);
  return children({
    navigation,
    countdownRef,
  } as ScreenTypes.login);
};

export default OTPService;
