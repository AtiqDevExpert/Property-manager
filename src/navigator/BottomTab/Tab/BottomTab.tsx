import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Animated,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LocationIcon} from '@assets/SVG/Svg';

import HomeModule from '@Home/navigation/index';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlotsModule from '@Plots/navigation';
import AddModule from '@Add/navigation';
import ClientsModule from '@Clients/navigation';
import ProfileeModule from '@Profile/navigation';

//Screen names
const homeName = "Home";
const Add = "Add";
const Clients = "Clients";
const Plots="Plots"; 
const Profile = "Profile";
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
      // <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     let rn = route.name;

        //     if (rn === homeName) {
        //       iconName = focused ? 'home' : 'home-outline';

        //     } else if (rn === detailsName) {
        //       iconName = focused ? 'list' : 'list-outline';

        //     } else if (rn === settingsName) {
        //       iconName = focused ? 'settings' : 'settings-outline';
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen  options={{headerShown: false}} name={homeName} component={HomeModule} />
        <Tab.Screen  options={{headerShown: false}} name={Plots} component={PlotsModule} />
        <Tab.Screen  options={{headerShown: false}} name={Add} component={AddModule} />
        <Tab.Screen  options={{headerShown: false}} name={Clients} component={ClientsModule} />
        <Tab.Screen  options={{headerShown: false}} name={Profile} component={ProfileeModule} />
        {/* <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} /> */}

      </Tab.Navigator>
    // </NavigationContainer>
    );
  };


  


export default BottomTab;
