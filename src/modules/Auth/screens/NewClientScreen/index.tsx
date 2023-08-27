import {useNavigation} from '@react-navigation/core';
import React from 'react';

import NewClientService from './index.service';
import NewClientServiceUI from './index.ui';

const NewClient = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <NewClientService navigation={navigation}>
      {(props: any) => <NewClientServiceUI {...props} />}
    </NewClientService>
  );
};

export default NewClient;
