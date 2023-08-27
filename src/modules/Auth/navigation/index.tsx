import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppIntro from '../screens/IntroSlider';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import OTP from '../screens/OTPScreen';
import CreateNewPassword from '../screens/CreateNewPasswordScreen';
import SignUpScreen from '@Auth/screens/SignUpScreen';
import SignUpProperty from '@Auth/screens/SignUpPropertyScreen';
import NewClient from '@Auth/screens/NewClientScreen';
import NewProperty from '@Auth/screens/NewPropertyScreen';
import ListOfPlots from '@Auth/screens/ListOfPlotsScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

export const AuthModule = () => {
  return (
    <Stack.Navigator>


      <Stack.Screen name="Intro" component={AppIntro} options={screenOptions} />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={screenOptions}
      />

      <Stack.Screen
        name="createnewpassword"
        component={CreateNewPassword}
        options={screenOptions}
      />

      <Stack.Screen name="otp" component={OTP} options={screenOptions} />

      <Stack.Screen
        name="signupProperty"
        component={SignUpProperty}
        options={screenOptions}
      />

      <Stack.Screen
        name="addNewClient"
        component={NewClient}
        options={screenOptions}
      /> 

      <Stack.Screen
        name="addNewProperty"
        component={NewProperty}
        options={screenOptions}
      />

      <Stack.Screen
        name="listOfPlots"
        component={ListOfPlots}
        options={screenOptions}
      />
   
 
    </Stack.Navigator>
  );
};

export default AuthModule;
