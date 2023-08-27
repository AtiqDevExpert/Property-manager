import {useNavigation} from '@react-navigation/core';
import React from 'react';

import CreateNewPasswordService from './index.service';
import CreateNewPasswordUI from './index.ui';

const CreateNewPassword = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <CreateNewPasswordService navigation={navigation}>
      {(props: any) => <CreateNewPasswordUI {...props} />}
    </CreateNewPasswordService>
  );
};

export default CreateNewPassword;
