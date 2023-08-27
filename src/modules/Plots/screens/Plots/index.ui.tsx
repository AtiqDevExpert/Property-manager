import React from 'react';
import {View, Text, ScrollView,FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import PlotComponent from '@components/PlotComponent';
//component containing the view of Login screen
const PlotsUI = ({navigation, plotdata}: ScreenTypes.Plots) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.view1}>
        <Text style={styles.text1}>
          Filter Result
        </Text>
      </View>
      <View
              style={styles.view2}>
              <FlatList
                nestedScrollEnabled
                style={{
                  marginVertical: 1,
                  borderRadius: 20,
                  //  backgroundColor:"orange"
                }}
                data={plotdata}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}: {item: any; index: number}) => {
                  return <PlotComponent item1={item} />;
                }}
                keyExtractor={item => item.id}
              />
            </View>
    </SafeAreaView>
  );
};

export default PlotsUI;
