import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const HomeService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
 

  return children({
    navigation,
  } as ScreenTypes.home);
};

export default HomeService;
