import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: Colors.darkPrimery,
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: Colors.otpBackgroundColor,
    borderRadius: 5,
    borderColor: Colors.darkPrimery,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.borderColor,
    color: Colors.textColor,
  },
  timer: {
    marginVertical: 10,
    color: Colors.textColor,
  },
  timerText: {
    color: Colors.textColor,
    textAlign: 'center',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  logo: {height: 300, width: 300},
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  opt: {
    color: Colors.darkPrimery,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  digit: {
    color: Colors.textColor,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpView: {
    width: '70%',
    height: 100,
    justifyContent: 'center',
  },
  view4: {flexDirection: 'row'},
  resend: {color: Colors.darkPrimery, fontWeight: '700'},
  view5: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  counter: {
    justifyContent: 'center',
  },
  view6: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  sec: {textAlign: 'center', color: Colors.textColor},
});
