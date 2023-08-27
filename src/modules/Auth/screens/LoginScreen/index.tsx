import {useNavigation} from '@react-navigation/core';
import React from 'react';

import LoginService from './index.service';
import LoginUI from './index.ui';

const Login = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <LoginService navigation={navigation}>
      {(props: any) => <LoginUI {...props} />}
    </LoginService>
  );
};

export default Login;
