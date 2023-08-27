import {useNavigation} from '@react-navigation/core';
import React from 'react';

import ListOfPlotsService from './index.service';
import ListOfPlotsServiceUI from './index.ui';

const ListOfPlots = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <ListOfPlotsService navigation={navigation}>
      {(props: any) => <ListOfPlotsServiceUI {...props} />}
    </ListOfPlotsService>
  );
};

export default ListOfPlots;
