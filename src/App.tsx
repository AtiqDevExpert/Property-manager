import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '@redux/reducers';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import AppPreLoader from './components/appPreLoader/index';

import HomeModule from '@Home/navigation';
import AuthModule from './modules/Auth/navigation/index';
import {LogBox} from 'react-native';
import Tabs from './navigator/BottomTab/Tab/BottomTab';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  const {isLoading} = useAppSelector(state => state.homeReducer);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainView} edges={['top']}>
        <NavigationContainer>
          <StatusBar backgroundColor="black" />
          <Stack.Navigator>
            {/* <Stack.Screen
              name="AuthModule"
              component={AuthModule}
              options={{headerShown: false}}
            /> */}
                <Stack.Screen
              name="BottomTab"
              component={Tabs}
              options={{headerShown: false}}
            />
          </Stack.Navigator> 
        </NavigationContainer>
        <Modal visible={isLoading} transparent>
          <AppPreLoader />
        </Modal>
        <Toast ref={Toast.setRef} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
