import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ActionType } from '@redux-saga/types';
export interface screen {
  navigation: NativeStackNavigationProp<any, any>;
  children?: any;
}

export interface login extends screen {
  countdownRef: any;
  emailValue: string;
  setEmailValue: string;
  passwordValue: string;
  setPasswordValue: string;
  passwordError: string;
  setPasswordError: string;
  emailError: string;
  setEmailError: string;
  gotoForgotPassword: any;
  gotoLogin: any;
  gotoSignUp: any;
}

export interface forgotPassword extends screen {
  countdownRef: any;
  value: string;
  setValue: string;
  error: string;
  setError: string;
  sendCode: any;
}

export interface createNewPassword extends screen {
  countdownRef: any;
  newPasswordValue: string;
  setNewPasswordValue: string;
  confirmPasswordValue: string;
  setConfirmPasswordValue: string;
  newPasswordError: string;
  setNewPasswordError: string;
  confirmPasswordError: string;
  setConfirmPasswordError: string;
  toggleModal: any;
  isModalVisible: boolean;
  setModalVisible: boolean;
}
export interface SignUpScreen extends screen {
  countdownRef: any;
  emailValue: string;
  setEmailValue: string;
  passwordValue: string;
  setPasswordValue: string;
  passwordError: string;
  setPasswordError: string;
  emailError: string;
  setEmailError: string;
  gotoSignupProperty: any;
  City: string;
  setCity: string;
  address: string;
  setAddress: string;
  bio: string;
  setBio: string;
  name: string;
  setName: string;
  username: string;
  setUsername: string;
  progressStepsStyle: any;
  buttonTextStyle: any;
  onNextStep: any;
  onPrevStep: any;
  defaultScrollViewProps: any;
  onSubmitSteps: any;
  image: any;
  setImage: any;
  selecter: any;
  setSelecter: any;
  visible: boolean;
  setVisible: boolean;
  takePhotoFromCamera: any;
  takePhotoFromGallery: any;
  onClear: any;
  goBack: any;
  toggleCheckBox:any;
  setToggleCheckBox:any;
}
export interface NewClientScreen extends screen {
  countdownRef: any;
  emailValue: string;
  setEmailValue: string;
  passwordValue: string;
  setPasswordValue: string;
  passwordError: string;
  setPasswordError: string;
  emailError: string;
  setEmailError: string;
  gotoSignupProperty: any;
  City: string;
  setCity: string;
  address: string;
  setAddress: string;
  bio: string;
  setBio: string;
  name: string;
  setName: string;
  username: string;
  setUsername: string;
  progressStepsStyle: any;
  buttonTextStyle: any;
  onNextStep: any;
  onPrevStep: any;
  defaultScrollViewProps: any;
  onSubmitSteps: any;
  takePhotoFromCamera: any;
  takePhotoFromGallery: any;
  goBack: any;
  toggleCheckBox:any;
  setToggleCheckBox:any;
  addNewProperty:any;
}

export interface NewPropertyScreen extends screen {
    navigation: NativeStackNavigationProp<any, any>;
    goBack:any;
    purchaseDateValue: string;
    setPurchaseDateValue: any;
    purchaseDateError: string;
    setPurchaseDateError: any;
    societyValue: string;
    setSocietyValue: any;
    societyError: string;
    setSocietyError: any;
    plotNoValue: string;
    setPlotNoValue: any;
    plotNoError: string;
    setPlotNoError: any;
    plotDimensionValue: string;
    setPlotDimensionValue: any;
    plotDimensionError: string;
    setPlotDimensionError: any;
    plotAreaValue: string;
    setPlotAreaValue: any;
    plotAreaError: string;
    setPlotAreaError: any;
    plotPriceValue: string;
    setPlotPriceValue: any;
    plotPriceError: string;
    setPlotPriceError: any;
    transferFeeValue: string;
    setTransferFeeValue: any;
    transferFeeError: string;
    setTransferFeeError: any;
    societyFeeValue: string;
    setSocietyFeeValue: any;
    societyFeeError: string;
    setSocietyFeeError: any;
    othersChargesValue: string;
    setOthersChargesValue: any;
    othersChargesError : string;
    setOthersChargesError: any;
    propertyManagerShareValue : string;
    setPropertyManagerShareValue: any;
    propertyManagerShareError : string;
    setPropertyManagerShareError: any;
    passwordError : string;
    setPasswordError: any;
    username : string;
    setUsername: any;
    toggleCheckBox : boolean;
    setToggleCheckBox: any; 
    refRBSheet: any ;
    rbsheetOpen: any ;  
    addClientAmountError: string;
    setAddClientAmountError: any;
    addClientAmountValue: string;
    setAddClientAmountValue: any;
    clientModalopen: any;
    isModalVisible: boolean; 
    setModalVisible: any;
    openPropertyScreen: any;
  }

export interface Intro extends screen {
  // email: React.MutableRefObject<any>;
  navigation: NativeStackNavigationProp<any, any>;
  onSkip: any;
  show: boolean;
  setShow: boolean;
  setValue: boolean;
}

export interface ListOfPlotsScreen extends screen {
  navigation: NativeStackNavigationProp<any, any>;
  isModalVisible: boolean;
  setModalVisible: any;
}