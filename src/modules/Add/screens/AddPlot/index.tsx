import {useNavigation} from '@react-navigation/core';
import React from 'react';

import HomeService from './index.service';
import HomeUI from './index.ui';

const Home = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <HomeService navigation={navigation}>
      {(props: any) => <HomeUI {...props} />}
    </HomeService>
  );
};

export default Home;
