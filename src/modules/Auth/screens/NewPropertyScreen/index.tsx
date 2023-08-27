import {useNavigation} from '@react-navigation/core';
import React from 'react';

import NewPropertyService from './index.service';
import NewPropertyServiceUI from './index.ui';

const NewProperty = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <NewPropertyService navigation={navigation}>
      {(props: any) => <NewPropertyServiceUI {...props} />}
    </NewPropertyService>
  );
};

export default NewProperty;
