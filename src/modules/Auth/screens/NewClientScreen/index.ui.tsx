import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  CreateNewPasswordScreenLogo,
  ModalLogo,
  CrossRedIcon,
} from '../../../../Assets/Intro/SVG/Svg';
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

import {BackIcon} from '../../../../Assets/SVG/Svg';
import IconButton from '@components/Button/iconButton';
//component containing the view of Login screen
const NewClientServiceUI = ({
  navigation,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  passwordError,
  setPasswordError,
  emailError,
  setEmailError,
  gotoSignupProperty,
  City,
  setCity,
  address,
  setAddress,
  bio,
  setBio,
  name,
  setName,
  username,
  setUsername,
  progressStepsStyle,
  buttonTextStyle,
  onNextStep,
  onPrevStep,
  defaultScrollViewProps,
  toggleCheckBox,
  addNewProperty,
  setToggleCheckBox,
  goBack,
  
  
}: ScreenTypes.NewClientScreen) => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

 // var remaining = height - 130;
 var remaining = height - 130;
const dat=[
  {

  },
  {

  },
  {

  },
  {

  },
]
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity onPress={goBack} style={styles.buttonTouch}>
        <BackIcon onPress={goBack} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>Add New Client</Text>
            <ScrollView>
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={name}
                      label="Name"
                      onChangeText={text => setName(text)}
                      secure={false}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={emailValue}
                      label="Email"
                      errorText={emailError}
                      onChangeText={text => setEmailValue(text)}
                      secure={false}
                    />
                  </View>
                </View>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="CNIC"
                        errorText={passwordError}
                        onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>

                <>
                  <Text style={styles.bigText}>Investment</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="Total Investment"
                        errorText={passwordError}
                        onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="Property Sharing"
                        errorText={passwordError}
                        onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <>
                  <Text style={styles.bigText}>Profit Sharing</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="Property Manager Percentage"
                        errorText={passwordError}
                        onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="Client Percentage"
                        errorText={passwordError}
                        onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.checkBox}>
                    <View style={{justifyContent: 'center'}}>
                      <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                      />
                    </View>
                    <Text style={styles.bigText}>Loss Sharing</Text>
                  </View>

                  {toggleCheckBox == true ? (
                    <>
                      <View style={styles.dummy}>
                        <View style={styles.input}>
                          <TextField
                            value={username}
                            label="Property Manager Percentage"
                            errorText={passwordError}
                            onChangeText={text => setUsername(text)}
                            secure={false}
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            value={username}
                            label="Client Percentage"
                            errorText={passwordError}
                            onChangeText={text => setUsername(text)}
                            secure={false}
                          />
                        </View>
                      </View>
                    </>
                  ) : null}
                </>
                <>
                  <Text style={styles.bigText}>Agreement Tenure</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={username}
                        label="Property Manager Percentage"
                        errorText={passwordError}
                        // onChangeText={text => setUsername(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <View style={styles.buttonView}>
                  <Button
                    text={'Save'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={80}
                    onPress={onOpen}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* Modalize list of clients */}
      <>
        <Modalize
          snapPoint={remaining}
          ref={modalizeRef}
          modalStyle={{
            borderTopStartRadius: width * 0.09,
            borderTopEndRadius: width * 0.09,
          }}>
          <View style={styles.modalizeBluebackground}>
            <Text style={styles.text}>Lists of Clients</Text>
            <View style={styles.modalizeWhitebackground}>
             
              <View
                style={styles.mcView1}>
               
                <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                  style={styles.mcScroolView}>
                    <ListofClientCard/>
                    <ListofClientCard/>
                    <ListofClientCard/>
                    <ListofClientCard/>
                </ScrollView >
                <View style={styles.mcView1}>
                <IconButton
                   text={'Add New Client'}
                   color={'#fff'}
                   fontSize={15}
                   height={50}
                   width={'100%'}
                   borderWidth={1}
                  //  marginTop={5}
                  //  marginBottom={10}
                   backgroundColor={'#0277FA'}
                    onPress={() => {
                      modalizeRef.current?.close();
                    }}
                   fill={Colors.white}
                   stroke={Colors.white}
                   borderRadius={10}
                 />
              
             
                 <Button
                   text={'Next'}
                   color={'#fff'}
                   fontSize={15}
                   height={50}
                   width={'100%'}
                   borderWidth={1}
                   marginTop={15}
                  //  marginBottom={10}
                   backgroundColor={'#0277FA'}
                   onPress={addNewProperty}
                 />
                </View>
               
              </View>
            </View>
            
          </View>
        </Modalize>
      </>
    </SafeAreaView>
  );
};
export default NewClientServiceUI;
