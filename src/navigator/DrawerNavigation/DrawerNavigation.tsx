// // import Tabs from '../../../../BottomTab/Tab/tab';
// // import HomeModule from '..';
// import {NavigationContainer, DrawerActions} from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import React from 'react';
// const Drawer = createDrawerNavigator();
// import {Colors} from '../../constants/Colors';
// import CustomSidebarMenu from './CustomSideBarMenu';
// import BottomTab from '../BottomTab/Tab/BottomTab';
//  const DrawerNavigator = () => {
//   return (
//     // <NavigationContainer>
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: Colors.white,
//           width: 240,
//           borderTopRightRadius: 30,
//           borderBottomRightRadius: 30,
//         },
//         headerShown: false,
//       }}
//       drawerContent={props => <CustomSidebarMenu {...props} />}>
//       <Drawer.Screen
//         name="BottomTab"
//         component={BottomTab}
//         options={{
//           drawerItemStyle: {height: 0},
//         }}
//       />
//       {/* <Drawer.Screen
//           name="SecondPage"
//           options={{drawerLabel: 'Second page Option'}}
//           component={secondScreenStack}
//         /> */}
//     </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// };
// export default DrawerNavigator