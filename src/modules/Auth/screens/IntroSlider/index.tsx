import {useNavigation} from '@react-navigation/core';
import React from 'react';

import IntroService from './index.service';
import IntroUI from './index.ui';

const AppIntro = () => {
  const navigation = useNavigation();
  //created separate component for business logic and view
  return (
    <IntroService navigation={navigation}>
      {(props: any) => <IntroUI {...props} />}
    </IntroService>
  );
};

export default AppIntro;
