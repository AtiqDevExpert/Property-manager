import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {CrossRedIcon} from '@assets/SVG/Svg';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
// import { LogoutRequest } from '@Auth/redux/actions';
import { useDispatch } from 'react-redux';
const CustomSidebarMenu = props => {
  const [houseVisible, setHouseVisible] = useState<boolean | null>(false);

  const [dataCheckboxState, setdataCheckboxState] = React.useState(false);
  const [speechCheckboxState, setSpeechCheckboxState] = React.useState(false);
  const [goodCheckboxState, setGoodCheckboxState] = React.useState(false);
  const dispatch=useDispatch();
  const randomModalHouse = () => {
    setHouseVisible(!houseVisible);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const navigation = useNavigation();
  const handleDrawerToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView  showsVerticalScrollIndicator={false} {...props}>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          {/* <Image
            source={require('../../../../assest/Images/Oxfess-Logo.png')}
            style={styles.logo}
          /> */}
          <TouchableOpacity onPress={handleDrawerToggle}>
            <CrossRedIcon style={{height: 20, width: 20, top: -15, left: 10}} />
          </TouchableOpacity>
        </View>

        <DrawerItemList {...props} />
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            // navigation.navigate('home');
          }}>
          {/* <Image
            source={require('../../../../assest/Images/homeDrawerIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem} onPress={randomModalHouse}>
          {/* <Image
            source={require('../../../../assest/Images/houseofRulesIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>House of Rules</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          {/* <Image
            source={require('../../../../assest/Images/privacyIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            // navigation.navigate('home');
          }}>
          {/* <Image
            source={require('../../../../assest/Images/welfareIcons.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Welfare</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            // navigation.navigate('home');
          }}>
          {/* <Image
            source={require('../../../../assest/Images/safetyIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Safety</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            // navigation.navigate('home');
          }}>
          {/* <Image
            source={require('../../../../assest/Images/helpIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            // navigation.navigate('home');
          }}>
          {/* <Image
            source={require('../../../../assest/Images/contactUsIcon.png')}
            style={styles.icon}
          /> */}
          <Text style={styles.text}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.customItem}
            onPress={() => {
              // navigation.navigate('home');
            }}>
            {/* <Image
              source={require('../../../../assest/Images/settingsIcoc.png')}
              style={styles.icon}
            /> */}
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
      </DrawerContentScrollView>
      {/* <ImageBackground
          source={require('../../../../assest/Images/backImageDrawer.png')}
          style={styles.icon2}
          resizeMode={'stretch'}>
        

          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              dispatch(LogoutRequest())
              // navigation.navigate('login');
            }}>
            <ImageBackground
              source={require('../../../../assest/Images/signout.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </ImageBackground> */}
      <>
       
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customItem: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logo: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    top: 30,
  },
  text: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 17,
    marginHorizontal: 10,
  },
  icon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon2: {
    height: 300,
    width: 230,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  customItem2: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 10,
    // marginLeft: -80,
    // backgroundColor:'red',
    position: 'absolute',
    bottom: 30,
  },
});

export default CustomSidebarMenu;
