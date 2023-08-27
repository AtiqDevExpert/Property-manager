import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clients from '../screens/Clients';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const ClientsModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clients"
        component={Clients}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default ClientsModule;
