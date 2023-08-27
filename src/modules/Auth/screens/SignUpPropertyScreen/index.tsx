import {useNavigation} from '@react-navigation/core';
import React from 'react';

import SignUpPropertyService from './index.service';
import SignUpPropertyUI from './index.ui';

const SignUpProperty = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <SignUpPropertyService navigation={navigation}>
      {(props: any) => <SignUpPropertyUI {...props} />}
    </SignUpPropertyService>
  );
};

export default SignUpProperty;
