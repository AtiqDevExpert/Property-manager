import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import React, {useState, useRef} from 'react';
import TextField from '../../../../components/TextField/index';
import IconButton from '../../../../components/Button/iconButton';
import Button from '../../../../components/Button/button';
import {ScreenTypes} from '../../interfaces';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import {BackIcon} from '../../../../Assets/SVG/Svg';
import {Modalize} from 'react-native-modalize';
import {
  NewPropertyPlotIcon,
  NewPropertyOthers,
  NewPropertyTransFee,
  NewPropertySocietyCharges,
} from '../../../../Assets/SVG/Svg';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import ListofClientCard from '@components/ListofClientCard/ListofClientCard';
import BottomSheet from '@components/BottomSheet/Bottomsheet';
import SmallBottomSheet from '@components/BottomSheet/SmallBottomSheet';
import SearchClientModal from '@components/SearchClientModal';
import SetupCompleteModal from '@components/SetupCompleteModal';
import {ModalLogo} from '../../../../Assets/SVG/Svg';
//component containing the view of Login screen
const NewPropertyServiceUI = ({
  navigation,
  goBack,
  purchaseDateValue,
  setPurchaseDateValue,
  purchaseDateError,
  setPurchaseDateError,
  societyValue,
  setSocietyValue,
  societyError,
  setSocietyError,
  plotNoValue,
  setPlotNoValue,
  plotNoError,
  setPlotNoError,
  plotDimensionValue,
  setPlotDimensionValue,
  plotDimensionError,
  setPlotDimensionError,
  plotAreaValue,
  setPlotAreaValue,
  plotAreaError,
  setPlotAreaError,
  plotPriceValue,
  setPlotPriceValue,
  plotPriceError,
  setPlotPriceError,
  transferFeeValue,
  setTransferFeeValue,
  transferFeeError,
  setTransferFeeError,
  societyFeeValue,
  setSocietyFeeValue,
  societyFeeError,
  setSocietyFeeError,
  othersChargesValue,
  setOthersChargesValue,
  othersChargesError, 
  setOthersChargesError,
  propertyManagerShareValue, 
  setPropertyManagerShareValue,
  propertyManagerShareError, 
  setPropertyManagerShareError,
  passwordError, 
  setPasswordError,
  username, 
  setUsername,
  toggleCheckBox, 
  setToggleCheckBox, 
  refRBSheet,
  rbsheetOpen,   
  addClientAmountError,
  setAddClientAmountError,
  addClientAmountValue,
  setAddClientAmountValue,
  clientModalopen,
  isModalVisible, 
  setModalVisible,
  openPropertyScreen,
  rbsheetClose,
  btndata,
}: ScreenTypes.NewPropertyScreen) => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  var remaining = height - 130;

  const [valuee, setValuee] = useState(1);
  var radio_props = [
    {label: 'Yes', value: 0},
    {label: 'No', value: 1},
  ];
  const [date, setDate] = useState<any>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log(date);
    var d = date.toISOString().slice(0, 10);
    setDate(d);
  };

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
            <Text style={styles.text}>Add New Property </Text>
            <ScrollView>
              <View style={styles.whitebackground}>
                <>
                  <View style={styles.nPropertydummy}>
                    <View style={styles.nPropertydummy1}>
                      <Text style={styles.totalAmount}>
                        Total : 20,000,000/- PKR
                      </Text>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyPlotIcon style={styles.logo} />
                        <Text style={styles.pricesection}>Plot Price</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          18,500,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyTransFee style={styles.logo} />
                        <Text style={styles.pricesection}>Transaction Fee</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          150,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertySocietyCharges style={styles.logo} />
                        <Text style={styles.pricesection}>Society Charges</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          50,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyOthers style={styles.logo} />
                        <Text style={styles.pricesection}>Others</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          00/-
                        </Text>
                      </View>
                    </View>
                  </View>
                </>

                <>
                  <View style={styles.radioButton}>
                    <View>
                      <Text style={styles.normalbigText}>
                        Its My Own Proeprty:
                      </Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <RadioForm
                        radio_props={radio_props}
                        initial={valuee}
                        buttonSize={10}
                        formHorizontal={true}
                        onPress={(value: number) => setValuee(value)}
                        labelStyle={{marginHorizontal: 10}}
                      />
                    </View>
                  </View>
                </>
                <>
                  <Text style={styles.bigText}>Purchase Plot</Text>
                  <View style={styles.dummy}>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                    <TouchableOpacity onPress={showDatePicker}>
                      <View style={styles.input}>
                        <TextField
                          editable={false}
                          value={date}
                          label="Purchase Date"
                          errorText={passwordError}
                          onChangeText={date => setDate(date)}
                          secure={false}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={societyValue}
                        label="Society"
                        errorText={societyError}
                        onChangeText={text => setSocietyValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={ plotNoValue}
                        label="Plot No"
                        errorText={ plotNoError}
                        onChangeText={text =>  setPlotNoValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={ plotDimensionValue}
                        label="Plot Dimension"
                        errorText={ plotDimensionError}
                        onChangeText={text =>  setPlotDimensionValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={ plotAreaValue}
                        label="Plot Area"
                        errorText={ plotAreaError}
                        onChangeText={text =>  setPlotAreaValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={  plotPriceValue}
                        label="Price"
                        errorText={ plotPriceError}
                        onChangeText={text =>   setPlotPriceValue(text)}
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
                    <Text style={styles.mediumText}>Additional Charges</Text>
                  </View>

                  {toggleCheckBox == true ? (
                    <>
                      <View style={styles.additionalCharges}>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={transferFeeValue}
                            label="Transfer Fee"
                            errorText={transferFeeError}
                            onChangeText={text => setTransferFeeValue(text)}
                            secure={false}
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={societyFeeValue}
                            label="Society Fee"
                            errorText={societyFeeError}
                            onChangeText={text => setSocietyFeeValue(text)}
                            secure={false}
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={othersChargesValue}
                            label="Other Charges"
                            errorText={othersChargesError}
                            onChangeText={text => setOthersChargesValue(text)}
                            secure={false}
                          />
                        </View>
                      </View>
                    </>
                  ) : null}
                </>

                {valuee == 1 ? (
                    <>      
                <View>
                    <>
                      <Text style={styles.bigText}>Cash Flow Details</Text>
                      <View style={styles.dummy}>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={propertyManagerShareValue}
                            label="Property Manager Share"
                            errorText={propertyManagerShareError}
                            onChangeText={text => setPropertyManagerShareValue(text)}
                            secure={false}
                          />
                        </View>
                      </View>
                    </>

                    <View style={{
                        flex:1,
                        //backgroundColor:"red",    
                        marginHorizontal: 20,
                        marginVertical: 10,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        flexWrap:'wrap',
                        width:'90%',
                        }}>
                          {btndata.map((item,index) =>{
                            return(
                              <>
                               <View style={{
                              backgroundColor:"#B8D7FB",
                              borderRadius:30,
                              width:"30%",
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginVertical:5

                              }}>
                              <Text style={{
                                marginTop:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                  {item.name}</Text>
                              <Text  style={{
                                marginBottom:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                {item.persentage}</Text>
                            </View>
                              </>
                            )
                          })}
                            {/* <View style={{
                              backgroundColor:"#B8D7FB",
                              borderRadius:30,
                              width:"30%",
                              alignItems: 'center',
                              justifyContent: 'center',

                              }}>
                              <Text style={{
                                marginTop:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                  Jawad</Text>
                              <Text  style={{
                                marginBottom:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                20%</Text>
                            </View>
                            <View style={{
                              backgroundColor:"#B8D7FB",
                              borderRadius:30,
                              width:"30%",
                              alignItems: 'center',
                              justifyContent: 'center',

                              }}>
                              <Text style={{
                                marginTop:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                  Navaz</Text>
                              <Text  style={{
                                marginBottom:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                20%</Text>
                            </View>
                            <View style={{
                              backgroundColor:"#B8D7FB",
                              borderRadius:30,
                              width:"30%",
                              alignItems: 'center',
                              justifyContent: 'center',

                              }}>
                              <Text style={{
                                marginTop:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                  Hammad</Text>
                              <Text  style={{
                                marginBottom:5,
                                fontSize:12,
                                fontWeight:"400",
                                color:"#033C7B"
                                }}>
                                20%</Text>
                            </View> */}
                            
                      </View>

                    <View style={styles.addclient}>
                      <IconButton
                        text={'Add More'}
                        color={Colors.buttonborderColor}
                        fontSize={12}
                        height={40}
                        width={'32%'}
                        backgroundColor={Colors.white}
                        marginBottom={10}
                        //onPress={onOpen}
                        borderWidth={1}
                        borderRadius={20}
                        fill={Colors.darkPrimery}
                        stroke={Colors.darkPrimery}
                        onPress={rbsheetOpen}
                      />
                    </View>

                </View>
                </>
                  ) : null}
                
           
                <View style={styles.buttonView}>
                  <Button
                    text={'Purchase'}
                    color={Colors.buttonborderColor}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.white}
                    marginBottom={80}
                    onPress={showDatePicker}
                    borderWidth={1}
                    borderRadius={10}
                    onPress={openPropertyScreen}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View>
        {/* Bootom Sheet  */}
        <>
          <RBSheet
            ref={refRBSheet}
            keyboardAvoidingViewEnabled={false}
            closeOnDragDown={true}
            closeOnPressMask={false}
            dragFromTopOnly={true}
            customStyles={{
              wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
              draggableIcon: {backgroundColor: '#D7DADF'},
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#FFFFFF',
                height: '47%',
              },
            }}>
            <SmallBottomSheet
              valuee={addClientAmountValue}
              errorText={addClientAmountError}
              onChangeText={setAddClientAmountValue}
              touchonPress={clientModalopen}
              rbsheetClose={rbsheetClose}
            />
          </RBSheet>
        </>

        {/* Search Client Modal */}
        <>
            <SearchClientModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            isVisible={clientModalopen}/>
        </>

          {/* Search Client Modal
          <>
            <SetupCompleteModal
            ModalLogo={ModalLogo}
            modalText1={"Setup Complete!"}
            modalText2={"Thanks to fill out all info you profile setup has been completed click to view your Dashboard"}
            modalButton={"Go To Dashboard"}
            />
        </> */}
      </View>
    </SafeAreaView>
  );
};
export default NewPropertyServiceUI;
