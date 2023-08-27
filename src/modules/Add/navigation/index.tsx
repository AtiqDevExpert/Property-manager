import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPlot from '../screens/AddPlot';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const AddModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddPlot"
        component={AddPlot}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AddModule;
