import {useNavigation} from '@react-navigation/core';
import React from 'react';

import ForgotPasswordService from './index.service';
import ForgotPasswordUI from './index.ui';

const ForgotPassword = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <ForgotPasswordService navigation={navigation}>
      {(props: any) => <ForgotPasswordUI {...props} />}
    </ForgotPasswordService>
  );
};

export default ForgotPassword;
