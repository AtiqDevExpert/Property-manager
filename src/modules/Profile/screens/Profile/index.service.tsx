import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const HomeService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  const data =[
    {
      month:"March",
      amount:"2000000/-",
    },
    {
      month:"April",
      amount:"7000000/-",
    },
    {
      month:"May",
      amount:"5000000/-",
    },
  ] 

  return children({
    navigation,
    data,
  } as ScreenTypes.home);
};

export default HomeService;
