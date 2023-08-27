import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export interface screen {
  navigation: NativeStackNavigationProp<any, any>;
  children?: any;
}

export interface home extends screen {

}
