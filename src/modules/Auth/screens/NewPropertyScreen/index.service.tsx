import React, {useRef, useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
/* component containing the business logic separated from view for
 api call trigger */
const NewPropertyService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  
  const [purchaseDateValue, setPurchaseDateValue] = useState<string>('');
  const [purchaseDateError, setPurchaseDateError] = useState<string | null>(null);

   const [societyValue, setSocietyValue] = useState<string>('');
   const [societyError, setSocietyError] = useState<string | null>(null);

   const [plotNoValue, setPlotNoValue] = useState<string>('');
   const [plotNoError, setPlotNoError] = useState<string | null>(null);

   const [plotDimensionValue, setPlotDimensionValue] = useState<string>('');
   const [plotDimensionError, setPlotDimensionError] = useState<string | null>(null);

   const [plotAreaValue, setPlotAreaValue] = useState<string>('');
   const [plotAreaError, setPlotAreaError] = useState<string | null>(null);

   const [plotPriceValue, setPlotPriceValue] = useState<string>('');
   const [plotPriceError, setPlotPriceError] = useState<string | null>(null);

   const [transferFeeValue, setTransferFeeValue] = useState<string>('');
   const [transferFeeError, setTransferFeeError] = useState<string | null>(null);

   const [societyFeeValue, setSocietyFeeValue] = useState<string>('');
   const [societyFeeError, setSocietyFeeError] = useState<string | null>(null);

   const [othersChargesValue, setOthersChargesValue] = useState<string>('');
   const [othersChargesError, setOthersChargesError] = useState<string | null>(null);

   const [propertyManagerShareValue, setPropertyManagerShareValue] = useState<string>('');
   const [propertyManagerShareError, setPropertyManagerShareError] = useState<string | null>(null);

  //  Bootom sheet Hook
   const [addClientAmountError, setAddClientAmountError] = useState<string | null>(null);
   const [addClientAmountValue, setAddClientAmountValue] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  
  const [toggleCheckBox, setToggleCheckBox] = useState<any>(false);
  const [isModalVisible, setModalVisible] = useState<any>(true);
  const progressStepsStyle = {
    activeStepIconBorderColor: '#0277FA',
    activeLabelColor: '#0277FA',
    activeStepNumColor: '#0277FA',
    activeStepIconColor: '#fff',
    completedStepIconColor: '#fff',
    completedProgressBarColor: '#0277FA',
    completedCheckColor: '#0277FA',
    borderWidth: 0,
    disabledStepNumColor: '##0277FA',
  };

  const btndata = [
    {
      name: 'Jawad ',
      persentage: '40%'
    },
    {
      name: 'aSAD Ahmad',
      persentage: '30%'
    },
    {
      name: 'Nabeel Ahmad',
      persentage: '10%'
    },
    {
      name: 'Alipaki Ahmad',
      persentage: '50%'
    },
    {
      name: 'Jawad Ahmad',
      persentage: '10%'
    },
    {
      name: 'Jawad Ahmad',
      persentage: '30%'
    },
    {
      name: 'Jawad Ahmad',
      persentage: '40%'
    },
    {
      name: 'Jawad Ahmad',
      persentage: '10%'
    },
    {
      name: 'Jawad Ahmad',
      persentage: '20%'
    },
  ];

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };
  const goBack = () => {
    navigation.goBack()
  };

  const clientModalopen = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible)
    if(isModalVisible==false){
      refRBSheet.current.close();
    }else{
      refRBSheet.current.open();
    }
    
  };

  const openPropertyScreen= () => {
    navigation.navigate('listOfPlots');
  }

  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };

  const rbsheetClose = () => {
    refRBSheet.current.Close();
  };

  return children({
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
  } as ScreenTypes.NewPropertyScreen);
};

export default NewPropertyService;
