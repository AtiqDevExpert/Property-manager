import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import React, {useState, useRef} from 'react';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import CheckBox from '@react-native-community/checkbox';
import {Modalize} from 'react-native-modalize';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import ListofClientCard from '@components/ListofClientCard/ListofClientCard';
import SetupCompleteModal from '@components/SetupCompleteModal';
import {ModalLogo} from '../../../../Assets/SVG/Svg';

import {BackIcon} from '../../../../Assets/SVG/Svg';
import IconButton from '@components/Button/iconButton';
import PlotComponent from '@components/PlotComponent';
import { FlatList } from 'react-native-gesture-handler';
//component containing the view of Login screen
const ListOfPlotsServiceUI = ({
  navigation,
  isModalVisible,
  setModalVisible,
  data,
}: ScreenTypes.ListOfPlotsScreen) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity 
      //onPress={goBack} 
      style={styles.buttonTouch}>
        <BackIcon 
        //onPress={goBack}
         style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>List Of Plots</Text>
            <ScrollView style={{
              // backgroundColor:"yellow"
              }}>
              <View style={styles.whitebackground}>
            
              
                <View style={{
                  width:"92%",
                  alignSelf: "center",
                  marginVertical:10,
                  height:height/2+10,
                  //alignItems: "center",
                  //justifyContent: "center",
                  // backgroundColor:"green",
                  // backgroundColor:"red",
                  borderRadius:20,
                  }}>

                  <FlatList
                  style={{ marginVertical:5,
                       borderRadius:20,
                      //  backgroundColor:"orange"
                      }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}:{item:any,index:number})=>{
                       return <PlotComponent  item1={item}/> 
                    }}
                    keyExtractor={item => item.id}
                  />
                
                </View>
           
                <View style={styles.buttonView}>
                  <Button
                    text={'Add New Plot'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginVertical={10}
                  //  onPress={onOpen}
                  />
                </View>
                <View style={styles.buttonView}>
                  <Button
                    text={'Setup Complete'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={10}
                    onPress={ () => {
                      setModalVisible(true)
                    }}
                  />
                </View>

              </View>
            </ScrollView>
          </View>
        </View>
      </View>
  
          <>
            <SetupCompleteModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            ModalLogo={ModalLogo}
            modalText1={"Setup Complete!"}
            modalText2={"Thanks to fill out all info you profile setup has been completed click to view your Dashboard"}
            modalButton={"Go To Dashboard"}
            />
        </>
    </SafeAreaView>
  );
};
export default ListOfPlotsServiceUI;
