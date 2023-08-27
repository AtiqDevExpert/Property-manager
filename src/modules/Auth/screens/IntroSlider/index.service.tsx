import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
/* component containing the business logic separated from view for
 api call trigger */
const IntroService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  const [show, setShow] = useState<boolean>(false);

  const onSkip = () => {
    setShow(true);
  };
  const slides = [
    {
      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',

      image: require('../../../../Assets/Intro/Images/Logo1.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background.png'),
      TouchableOpacity: TouchableOpacity,
    },
    {
      key: 's2',
      title: 'Sale & Purchase\nProperty Here',

      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',

      image: require('../../../../Assets/Intro/Images/Logo2.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background.png'),
      TouchableOpacity: TouchableOpacity,
    },
    {
      key: 's3',
      title: 'Its Totally\nReliable',
      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',
      image: require('../../../../Assets/Intro/Images/Logo3.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background.png'),
      TouchableOpacity: TouchableOpacity,
    },
  ];
  return children({
    navigation,
    onSkip,
    show,
    setShow,
    slides,
  } as ScreenTypes.Intro);
};

export default IntroService;
