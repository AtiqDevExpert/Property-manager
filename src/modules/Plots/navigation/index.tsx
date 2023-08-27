import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Plots from '../screens/Plots';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const PlotsModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plots"
        component={Plots}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default PlotsModule;
