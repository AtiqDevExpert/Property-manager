import {useNavigation} from '@react-navigation/core';
import React from 'react';

import OTPService from './index.service';
import LoginUI from './index.ui';

const OTP = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <OTPService navigation={navigation}>
      {(props: any) => <LoginUI {...props} />}
    </OTPService>
  );
};

export default OTP;
