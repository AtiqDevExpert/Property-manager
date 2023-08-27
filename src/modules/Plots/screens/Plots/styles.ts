import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor:Colors.white,
  },
  view1: {
    height:"15%",
    backgroundColor: Colors.darkPrimery,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    //marginTop:10
    },
  view2:  {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '94%',
      alignSelf: 'center',
     // height: '35%',
      // flex: 1,
      //backgroundColor:"red"
    },
    text1: {
      fontSize:30,
      fontWeight:"600",
      color: Colors.white
    }



});
