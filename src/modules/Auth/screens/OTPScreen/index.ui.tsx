import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Timer, Countdown} from 'react-native-element-timer';
import OTPInput from 'react-native-otp';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import {Colors} from '../../../../constants/Colors';
import {OPTScreenLogo} from '../../../../Assets/SVG/Svg';
//component containing the view of Login screen
const OTPUI = ({navigation, countdownRef}: ScreenTypes.login) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.view1}>
          <OPTScreenLogo style={styles.logo} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.opt}>Verify OTP</Text>
          <Text style={styles.digit}>
            Please enter 4 digit code{'\n'} sent to your email
          </Text>
        </View>
        <View style={styles.view3}>
          <OTPInput
            tintColor={Colors.borderColor}
            offTintColor={Colors.darkPrimery}
            otpLength={4}
            containerStyle={styles.underlineStyleHighLighted}
            cellStyle={styles.underlineStyleBase}
          />
          <View style={styles.view4}>
            <Text>I didn't receive code.</Text>
            <TransparentBtn
              text={'Resend Again'}
              color={'#0277FA'}
              fontSize={15}
              width={'25%'}
              fontWeight={'bold'}
              onPress={() => navigation.navigate('createnewpassword')}
            />
          </View>
          <View style={styles.view5}>
            <View style={styles.counter}>
              <Countdown
                ref={countdownRef}
                style={styles.timer}
                textStyle={styles.timerText}
                initialSeconds={90}
                onTimes={_e => {}}
                onPause={_e => {}}
                onEnd={_e => {}}
                formatTime={'hh:mm:ss'}
              />
            </View>
            <View style={styles.view6}>
              <Text style={styles.sec}>sec left</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPUI;
