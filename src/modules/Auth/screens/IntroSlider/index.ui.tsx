import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Introo from '../../../../components/Intro/intro';
// import Tabs from '../../BottomTab/Tab/tab';
import styles from './styles';
import {ScreenTypes} from '../../interfaces';

const Intro = ({
  navigation,
  onSkip,
  show,
  setShow,
  slides,
}: ScreenTypes.Intro) => {
  return (
    <View style={styles.safeareaview}>
      <Introo data={slides} onSkip={onSkip} showNextButton={true} goToSlide />
    </View>
  );
};

export default Intro;
