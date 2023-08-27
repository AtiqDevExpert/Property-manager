import {useNavigation} from '@react-navigation/core';
import React from 'react';

import SignUpService from './index.service';
import SignUpUI from './index.ui';

const SignUp = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <SignUpService navigation={navigation}>
      {(props: any) => <SignUpUI {...props} />}
    </SignUpService>
  );
};

export default SignUp;
