import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const ProfileeModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProfileeModule;
