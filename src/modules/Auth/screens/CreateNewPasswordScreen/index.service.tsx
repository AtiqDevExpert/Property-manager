import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import React, {useRef, useState} from 'react';
/* component containing the business logic separated from view for
 api call trigger */
const CreateNewPasswordService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
 const countdownRef = useRef<any>(null);
 const [newPasswordValue, setNewPasswordValue] = useState<string>('');
 const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
 const [newPasswordError, setNewPasswordError] = useState<string | null>(null);
 const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
 const [isModalVisible, setModalVisible] = useState<boolean | null>(false);
 
const toggleModal = () => {
  setModalVisible(!isModalVisible);
};
 
 
 return children({
    navigation,
    countdownRef,
    newPasswordValue,
    setNewPasswordValue,
    confirmPasswordValue,
    setConfirmPasswordValue,
    newPasswordError,
    setNewPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
    isModalVisible, 
    setModalVisible,
    toggleModal,
  } as ScreenTypes.createNewPassword);
};

export default CreateNewPasswordService;
