import {useNavigation} from '@react-navigation/core';
import React from 'react';

import PlotsService from './index.service';
import PlotsUI from './index.ui';

const Plots = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <PlotsService navigation={navigation}>
      {(props: any) => <PlotsUI {...props} />}
    </PlotsService>
  );
};

export default Plots;
