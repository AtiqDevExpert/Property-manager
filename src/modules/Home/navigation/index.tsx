import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const HomeModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeModule;
